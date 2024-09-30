import { Knex } from "knex";
import { withQuery } from "db";
import { BlocksSortBy, DB_READ_block, OrderBy } from "types";
import * as utils from "utils";
import * as cursorUtils from "utils/cursor";

const TABLE_NAME = "block";
export function blockDB(trx: Nullable<Knex.Transaction>) {
  return withQuery(TABLE_NAME, trx);
}

export async function getByHash(
  block_hash: Buffer,
  trx: Nullable<Knex.Transaction> = null
): Promise<Undefinedable<DB_READ_block>> {
  return await blockDB(trx).where("block_hash", block_hash).first();
}

export async function getByNumber(
  block_number: number,
  trx: Nullable<Knex.Transaction> = null
): Promise<Undefinedable<DB_READ_block>> {
  return await blockDB(trx).where("block_number", block_number).first();
}

export async function getTotalCount(): Promise<bigint> {
  const totalCount = await blockDB(null).count("*").first();
  return totalCount.count ? BigInt(totalCount.count) : 0n;
}

export async function getLastBlockFromTimestamp(
  timestamp: bigint,
  trx: Nullable<Knex.Transaction> = null
): Promise<Undefinedable<DB_READ_block>> {
  return await blockDB(trx)
    .orderBy("block_number", "desc")
    .where("timestamp", "<=", timestamp.toString())
    .limit(1)
    .first();
}

type DB_READ_block_with_cursor = DB_READ_block & {
  __internal_cursor: string;
};
type getManyPaginationInput = {
  sort_by: BlocksSortBy;
  order_by: OrderBy;

  cursor?: Nullable<string>;
  limit: number;
};
export async function getManyPagination(
  input: getManyPaginationInput,
  trx: Nullable<Knex.Transaction> = null
): Promise<{
  blocks: DB_READ_block_with_cursor[];
  hasNextPage: boolean;
}> {
  const blocksSortBy = input.sort_by;
  switch (blocksSortBy) {
    case BlocksSortBy.timestamp: {
      const sortByColumnName = "timestamp";
      const orderBySymbol = input.order_by === OrderBy.asc ? ">" : "<";

      let query = blockDB(trx)
        .select("*")
        .orderBy(sortByColumnName, input.order_by)
        .limit(input.limit + 1);

      if (input.cursor) {
        const [fieldCursor] = cursorUtils.unhashCursorData(input.cursor);
        query = query.where(sortByColumnName, orderBySymbol, fieldCursor);
      }

      const blocks = await query;

      // determine if there is a next page based on the number of assets queried
      let hasNextPage = false;
      if (blocks.length > input.limit) {
        hasNextPage = true;
        blocks.splice(-1);
      }

      for (const block of blocks) {
        block.__internal_cursor = cursorUtils.hashCursorData([
          block.timestamp.toString(),
        ]);
      }

      return { blocks, hasNextPage };
    }
    default: {
      utils.rejectNotHandledSwitchStatement(blocksSortBy);
    }
  }
}
