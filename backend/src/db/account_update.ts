import { Knex } from "knex";

import { withQuery } from "db";
import { DB_READ_account_update, AccountUpdatesSortBy, OrderBy } from "types";
import * as utils from "utils";
import * as cursorUtils from "utils/cursor";

const TABLE_NAME = "account_update";
export function accountUpdateDB(trx: Nullable<Knex.Transaction>) {
  return withQuery(TABLE_NAME, trx);
}

export async function get(
  account_update_id: string,
  trx: Nullable<Knex.Transaction> = null
): Promise<Undefinedable<DB_READ_account_update>> {
  return await accountUpdateDB(trx)
    .where("account_update_id", account_update_id)
    .first();
}

export async function getLatestByAccountID(
  account_id: Buffer,
  trx: Nullable<Knex.Transaction> = null
): Promise<Undefinedable<DB_READ_account_update>> {
  return await accountUpdateDB(trx)
    .where("account_id", account_id)
    .orderBy("block_number", "desc")
    .orderBy("block_updated_account_index", "desc")
    .first();
}

export async function getTotalCount(): Promise<bigint> {
  const totalCount = await accountUpdateDB(null).count("*").first();
  return totalCount.count ? BigInt(totalCount.count) : 0n;
}

export async function getTotalCountByBlockNumber(
  block_number: bigint
): Promise<bigint> {
  const totalCount = await accountUpdateDB(null)
    .count("*")
    .where("block_number", block_number.toString())
    .first();
  return totalCount.count ? BigInt(totalCount.count) : 0n;
}

type DB_READ_account_update_with_cursor = DB_READ_account_update & {
  __internal_cursor: string;
};
type getManyPaginationInput = {
  sort_by: AccountUpdatesSortBy;
  order_by: OrderBy;

  block_hash?: Buffer;

  cursor?: Nullable<string>;
  limit: number;
};
export async function getManyPagination(
  input: getManyPaginationInput,
  trx: Nullable<Knex.Transaction> = null
): Promise<{
  accountUpdates: DB_READ_account_update_with_cursor[];
  hasNextPage: boolean;
}> {
  function applyFilter(query: any) {
    if (!utils.isNullOrUndefined(input.block_hash)) {
      query = query.where("block_hash", input.block_hash);
    }

    return query;
  }

  const accountUpdatesSortBy = input.sort_by;
  switch (accountUpdatesSortBy) {
    case AccountUpdatesSortBy.commited_at: {
      const sortByColumnName = "block_number";
      const orderBySymbol = input.order_by === OrderBy.asc ? ">" : "<";

      let query = accountUpdateDB(trx)
        .select("*")
        // TODO one block can have many account updates, this pagination wont be accurate
        .orderBy(sortByColumnName, input.order_by)
        .limit(input.limit + 1);

      query = applyFilter(query);

      if (input.cursor) {
        const [fieldCursor] = cursorUtils.unhashCursorData(input.cursor);
        query = query.where(sortByColumnName, orderBySymbol, fieldCursor);
      }

      const accountUpdates = await query;

      // determine if there is a next page based on the number of assets queried
      let hasNextPage = false;
      if (accountUpdates.length > input.limit) {
        hasNextPage = true;
        accountUpdates.splice(-1);
      }

      for (const accountUpdate of accountUpdates) {
        accountUpdate.__internal_cursor = cursorUtils.hashCursorData([
          accountUpdate.block_number.toString(),
        ]);
      }

      return { accountUpdates, hasNextPage };
    }
    default: {
      utils.rejectNotHandledSwitchStatement(accountUpdatesSortBy);
    }
  }
}
