import * as db_nullifier from "db/nullifier";
import { DB_READ_nullifier } from "types";
import * as utils from "utils";
import * as validatorUtils from "utils/validators";

// if hex string, search by nullifier
export async function searchForNullifier(
  filter: string
): Promise<Nullable<DB_READ_nullifier>> {
  const hexStringValue = validatorUtils.getHexStringOrNull(filter);
  if (hexStringValue) {
    const nullifier = utils.digestToBuffer(hexStringValue);
    return await db_nullifier.get(nullifier);
  }

  return null;
}
