import * as db_block from "db/block";
import { DB_READ_block } from "types";
import * as utils from "utils";
import * as validatorUtils from "utils/validators";

// if hex string, search by block hash
// if number, search by block number
export async function searchForBlock(
  filter: string
): Promise<Undefinedable<DB_READ_block>> {
  const hexStringValue = validatorUtils.getHexStringOrNull(filter);
  if (hexStringValue) {
    const blockHash = utils.digestToBuffer(hexStringValue);
    return await db_block.getByHash(blockHash);
  }

  const decimalNumberValue = validatorUtils.getBigIntNumberOrNull(filter);
  if (!utils.isNullOrUndefined(decimalNumberValue)) {
    const blockNumber = Number(decimalNumberValue);
    return await db_block.getByNumber(blockNumber);
  }

  return null;
}
