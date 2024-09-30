import { Knex } from "knex";
import { withQuery } from "db";
import { DB_READ_note, NotesSortBy, OrderBy } from "types";
import * as utils from "utils";
import * as cursorUtils from "utils/cursor";

const TABLE_NAME = "note";
export function noteDB(trx: Nullable<Knex.Transaction>) {
  return withQuery(TABLE_NAME, trx);
}

export async function get(
  note_id: Buffer,
  trx: Nullable<Knex.Transaction> = null
): Promise<Undefinedable<DB_READ_note>> {
  return await noteDB(trx).where("note_id", note_id).first();
}

export async function getByNullifier(
  nullifier: Buffer,
  trx: Nullable<Knex.Transaction> = null
): Promise<Undefinedable<DB_READ_note>> {
  return await noteDB(trx).where("nullifier", nullifier).first();
}

export async function getTotalCount(): Promise<bigint> {
  const totalCount = await noteDB(null).count("*").first();
  return totalCount.count ? BigInt(totalCount.count) : 0n;
}

export async function getTotalCountInBlockNumber(
  block_number: bigint
): Promise<bigint> {
  const totalCount = await noteDB(null)
    .count("*")
    .where("block_number", block_number.toString())
    .first();
  return totalCount.count ? BigInt(totalCount.count) : 0n;
}

type DB_READ_note_with_cursor = DB_READ_note & {
  __internal_cursor: string;
};
type getManyPaginationInput = {
  sort_by: NotesSortBy;
  order_by: OrderBy;

  block_hash?: Buffer;

  cursor?: Nullable<string>;
  limit: number;
};
export async function getManyPagination(
  input: getManyPaginationInput,
  trx: Nullable<Knex.Transaction> = null
): Promise<{
  notes: DB_READ_note_with_cursor[];
  hasNextPage: boolean;
}> {
  function applyFilter(query: any) {
    if (!utils.isNullOrUndefined(input.block_hash)) {
      query = query.where("block_hash", input.block_hash);
    }

    return query;
  }

  const notesSortBy = input.sort_by;
  switch (notesSortBy) {
    case NotesSortBy.commited_at: {
      const sortByColumnName = "block_number";
      const orderBySymbol = input.order_by === OrderBy.asc ? ">" : "<";

      let query = noteDB(trx)
        .select("*")
        // TODO one block can have many notes, this pagination wont be accurate
        .orderBy(sortByColumnName, input.order_by)
        .limit(input.limit + 1);

      query = applyFilter(query);

      if (input.cursor) {
        const [fieldCursor] = cursorUtils.unhashCursorData(input.cursor);
        query = query.where(sortByColumnName, orderBySymbol, fieldCursor);
      }

      const notes = await query;

      // determine if there is a next page based on the number of assets queried
      let hasNextPage = false;
      if (notes.length > input.limit) {
        hasNextPage = true;
        notes.splice(-1);
      }

      for (const note of notes) {
        note.__internal_cursor = cursorUtils.hashCursorData([
          note.block_number.toString(),
        ]);
      }

      return { notes, hasNextPage };
    }
    default: {
      utils.rejectNotHandledSwitchStatement(notesSortBy);
    }
  }
}
