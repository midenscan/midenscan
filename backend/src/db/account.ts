import { Knex } from "knex";
import { withQuery } from "db";
import { DB_READ_account, AccountsSortBy, OrderBy } from "types";
import * as utils from "utils";
import * as cursorUtils from "utils/cursor";

const TABLE_NAME = "account";
export function accountDB(trx: Nullable<Knex.Transaction>) {
  return withQuery(TABLE_NAME, trx);
}

export async function get(
  account_id: Buffer,
  trx: Nullable<Knex.Transaction> = null
): Promise<Undefinedable<DB_READ_account>> {
  return await accountDB(trx).where("account_id", account_id).first();
}

export async function getTotalCount(): Promise<bigint> {
  const totalCount = await accountDB(null).count("*").first();
  return totalCount.count ? BigInt(totalCount.count) : 0n;
}

type DB_READ_account_with_cursor = DB_READ_account & {
  __internal_cursor: string;
};
type getManyPaginationInput = {
  sort_by: AccountsSortBy;
  order_by: OrderBy;

  cursor?: Nullable<string>;
  limit: number;
};
export async function getManyPagination(
  input: getManyPaginationInput,
  trx: Nullable<Knex.Transaction> = null
): Promise<{
  accounts: DB_READ_account_with_cursor[];
  hasNextPage: boolean;
}> {
  const accountsSortBy = input.sort_by;
  switch (accountsSortBy) {
    case AccountsSortBy.timestamp: {
      const sortByColumnName = "block_number";
      const orderBySymbol = input.order_by === OrderBy.asc ? ">" : "<";

      let query = accountDB(trx)
        .select("*")
        .orderBy(sortByColumnName, input.order_by)
        // TODO one block can have many accounts, this pagination wont be accurate
        .limit(input.limit + 1);

      if (input.cursor) {
        const [fieldCursor] = cursorUtils.unhashCursorData(input.cursor);
        query = query.where(sortByColumnName, orderBySymbol, fieldCursor);
      }

      const accounts = await query;

      // determine if there is a next page based on the number of assets queried
      let hasNextPage = false;
      if (accounts.length > input.limit) {
        hasNextPage = true;
        accounts.splice(-1);
      }

      for (const account of accounts) {
        account.__internal_cursor = cursorUtils.hashCursorData([
          account.block_number.toString(),
        ]);
      }

      return { accounts, hasNextPage };
    }
    default: {
      utils.rejectNotHandledSwitchStatement(accountsSortBy);
    }
  }
}
