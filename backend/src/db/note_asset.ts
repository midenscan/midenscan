import { Knex } from "knex";
import { withQuery } from "db";
import { DB_READ_note_asset, NoteAssetsSortBy, OrderBy } from "types";
import * as utils from "utils";
import * as cursorUtils from "utils/cursor";

const TABLE_NAME = "note_asset";
export function noteAssetDB(trx: Nullable<Knex.Transaction>) {
  return withQuery(TABLE_NAME, trx);
}

type DB_READ_note_asset_with_cursor = DB_READ_note_asset & {
  __internal_cursor: string;
};
type getManyPaginationInput = {
  sort_by: NoteAssetsSortBy;
  order_by: OrderBy;

  note_id?: Buffer;

  cursor?: Nullable<string>;
  limit: number;
};
export async function getManyPagination(
  input: getManyPaginationInput,
  trx: Nullable<Knex.Transaction> = null
): Promise<{
  noteAssets: DB_READ_note_asset_with_cursor[];
  hasNextPage: boolean;
}> {
  function applyFilter(query: any) {
    if (!utils.isNullOrUndefined(input.note_id)) {
      query = query.where("note_id", input.note_id);
    }

    return query;
  }

  const noteAssetsSortBy = input.sort_by;
  switch (noteAssetsSortBy) {
    case NoteAssetsSortBy.faucet_id: {
      const sortByColumnName = "faucet_id";
      const orderBySymbol = input.order_by === OrderBy.asc ? ">" : "<";

      let query = noteAssetDB(trx)
        .select("*")
        .orderBy(sortByColumnName, input.order_by)
        .limit(input.limit + 1);

      query = applyFilter(query);

      if (input.cursor) {
        const [fieldCursor] = cursorUtils.unhashCursorData(input.cursor);
        const fieldCursorBuffer = utils.accountToBuffer(fieldCursor);
        query = query.where(sortByColumnName, orderBySymbol, fieldCursorBuffer);
      }

      const noteAssets = await query;

      // determine if there is a next page based on the number of assets queried
      let hasNextPage = false;
      if (noteAssets.length > input.limit) {
        hasNextPage = true;
        noteAssets.splice(-1);
      }

      for (const noteAsset of noteAssets) {
        noteAsset.__internal_cursor = cursorUtils.hashCursorData([
          utils.bufferToAccount(noteAsset.faucet_id),
        ]);
      }

      return { noteAssets, hasNextPage };
    }
    default: {
      utils.rejectNotHandledSwitchStatement(noteAssetsSortBy);
    }
  }
}
