import * as db_transaction from "db/transaction";
import { DB_READ_transaction } from "types";
import * as utils from "utils";
import * as validatorUtils from "utils/validators";

// if hex string, search by transaction hash
export async function searchForTransaction(
  filter: string
): Promise<Nullable<DB_READ_transaction>> {
  const hexStringValue = validatorUtils.getHexStringOrNull(filter);
  if (hexStringValue) {
    const transactionHash = utils.digestToBuffer(hexStringValue);
    return await db_transaction.get(transactionHash);
  }

  return null;
}
