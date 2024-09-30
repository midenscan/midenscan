import * as db_note from "db/note";
import { DB_READ_note } from "types";
import * as utils from "utils";
import * as validatorUtils from "utils/validators";

// if hex string, search by note id or nullifier
export async function searchForNote(
  filter: string
): Promise<Nullable<DB_READ_note>> {
  const hexStringValue = validatorUtils.getHexStringOrNull(filter);
  if (hexStringValue) {
    const noteId = utils.digestToBuffer(hexStringValue);
    const note = await db_note.get(noteId);
    if (note) {
      return note;
    }

    const noteByNullifier = await db_note.getByNullifier(noteId);
    if (noteByNullifier) {
      return noteByNullifier;
    }
  }

  return null;
}
