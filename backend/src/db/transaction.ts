import { Knex } from "knex";
import { withQuery } from "db";
import { DB_READ_transaction, TransactionsSortBy, OrderBy } from "types";
import * as utils from "utils";
import * as cursorUtils from "utils/cursor";

const TABLE_NAME = "transaction";
export function transactionDB(trx: Nullable<Knex.Transaction>) {
  return withQuery(TABLE_NAME, trx);
}

export async function get(
  transaction_id: Buffer,
  trx: Nullable<Knex.Transaction> = null
): Promise<Undefinedable<DB_READ_transaction>> {
  return await transactionDB(trx)
    .where("transaction_id", transaction_id)
    .first();
}

export async function getTotalCount(): Promise<bigint> {
  const totalCount = await transactionDB(null).count("*").first();
  return totalCount.count ? BigInt(totalCount.count) : 0n;
}

export async function getTotalCountAfterBlockNumber(
  block_number: bigint
): Promise<bigint> {
  const totalCount = await transactionDB(null)
    .count("*")
    .where("block_number", ">=", block_number.toString())
    .first();
  return totalCount.count ? BigInt(totalCount.count) : 0n;
}

export async function getTotalCountInBlockNumber(
  block_number: bigint
): Promise<bigint> {
  const totalCount = await transactionDB(null)
    .count("*")
    .where("block_number", block_number.toString())
    .first();
  return totalCount.count ? BigInt(totalCount.count) : 0n;
}

type DB_READ_transaction_with_cursor = DB_READ_transaction & {
  __internal_cursor: string;
};
type getManyPaginationInput = {
  sort_by: TransactionsSortBy;
  order_by: OrderBy;

  block_hash?: Buffer;
  account_id?: Buffer;

  cursor?: Nullable<string>;
  limit: number;
};
export async function getManyPagination(
  input: getManyPaginationInput,
  trx: Nullable<Knex.Transaction> = null
): Promise<{
  transactions: DB_READ_transaction_with_cursor[];
  hasNextPage: boolean;
}> {
  function applyFilter(query: any) {
    if (!utils.isNullOrUndefined(input.block_hash)) {
      query = query.where("block_hash", input.block_hash);
    }
    if (!utils.isNullOrUndefined(input.account_id)) {
      query = query.where("account_id", input.account_id);
    }

    return query;
  }

  const transactionsSortBy = input.sort_by;
  switch (transactionsSortBy) {
    case TransactionsSortBy.commited_at: {
      const sortByColumnName = "block_number";
      const orderBySymbol = input.order_by === OrderBy.asc ? ">" : "<";

      let query = transactionDB(trx)
        .select("*")
        .orderBy(sortByColumnName, input.order_by)
        // TODO one block can have many transaction, this pagination wont be accurate
        .limit(input.limit + 1);

      query = applyFilter(query);

      if (input.cursor) {
        const [fieldCursor] = cursorUtils.unhashCursorData(input.cursor);
        query = query.where(sortByColumnName, orderBySymbol, fieldCursor);
      }

      const transactions = await query;

      // determine if there is a next page based on the number of assets queried
      let hasNextPage = false;
      if (transactions.length > input.limit) {
        hasNextPage = true;
        transactions.splice(-1);
      }

      for (const transaction of transactions) {
        transaction.__internal_cursor = cursorUtils.hashCursorData([
          transaction.block_number.toString(),
        ]);
      }

      return { transactions, hasNextPage };
    }
    default: {
      utils.rejectNotHandledSwitchStatement(transactionsSortBy);
    }
  }
}
