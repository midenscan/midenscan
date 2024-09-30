import * as db_account from "db/account";
import { DB_READ_account } from "types";
import * as utils from "utils";
import * as validatorUtils from "utils/validators";

// if hex string, search by account id
export async function searchForAccount(
  filter: string
): Promise<Nullable<DB_READ_account>> {
  const hexStringValue = validatorUtils.getHexStringOrNull(filter);
  if (hexStringValue) {
    const accountId = utils.accountToBuffer(hexStringValue);
    return await db_account.get(accountId);
  }

  return null;
}
