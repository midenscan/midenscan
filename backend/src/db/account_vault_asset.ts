import { Knex } from "knex";
import { withQuery } from "db";
import {
  DB_READ_account_vault_asset,
  AccountVaultAssetsSortBy,
  OrderBy,
} from "types";
import * as utils from "utils";
import * as cursorUtils from "utils/cursor";

const TABLE_NAME = "account_vault_asset";
export function accountVaultAssetDB(trx: Nullable<Knex.Transaction>) {
  return withQuery(TABLE_NAME, trx);
}

type DB_READ_account_vault_asset_with_cursor = DB_READ_account_vault_asset & {
  __internal_cursor: string;
};
type getManyPaginationInput = {
  sort_by: AccountVaultAssetsSortBy;
  order_by: OrderBy;

  account_id?: Buffer;

  cursor?: Nullable<string>;
  limit: number;
};
export async function getManyPagination(
  input: getManyPaginationInput,
  trx: Nullable<Knex.Transaction> = null
): Promise<{
  accountVaultAssets: DB_READ_account_vault_asset_with_cursor[];
  hasNextPage: boolean;
}> {
  function applyFilter(query: any) {
    if (!utils.isNullOrUndefined(input.account_id)) {
      query = query.where("account_id", input.account_id);
    }

    return query;
  }

  const accountVaultAssetsSortBy = input.sort_by;
  switch (accountVaultAssetsSortBy) {
    case AccountVaultAssetsSortBy.faucet_id: {
      const sortByColumnName = "faucet_id";
      const orderBySymbol = input.order_by === OrderBy.asc ? ">" : "<";

      let query = accountVaultAssetDB(trx)
        .select("*")
        .orderBy(sortByColumnName, input.order_by)
        .limit(input.limit + 1);

      query = applyFilter(query);

      if (input.cursor) {
        const [fieldCursor] = cursorUtils.unhashCursorData(input.cursor);
        const fieldCursorBuffer = utils.accountToBuffer(fieldCursor);
        query = query.where(sortByColumnName, orderBySymbol, fieldCursorBuffer);
      }

      const accountVaultAssets = await query;

      // determine if there is a next page based on the number of assets queried
      let hasNextPage = false;
      if (accountVaultAssets.length > input.limit) {
        hasNextPage = true;
        accountVaultAssets.splice(-1);
      }

      for (const accountVaultAsset of accountVaultAssets) {
        accountVaultAsset.__internal_cursor = cursorUtils.hashCursorData([
          utils.bufferToAccount(accountVaultAsset.faucet_id),
        ]);
      }

      return { accountVaultAssets, hasNextPage };
    }
    default: {
      utils.rejectNotHandledSwitchStatement(accountVaultAssetsSortBy);
    }
  }
}
