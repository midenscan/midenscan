import { isString } from "class-validator";
import * as utils from "utils";

export function getBigIntNumberOrNull(value: unknown): Nullable<bigint> {
  if (!utils.isStringOrNumber(value)) {
    return null;
  }

  const valueStr = value as string;
  if (utils.isPositiveInteger(valueStr)) {
    return BigInt(valueStr);
  }

  return null;
}

export function getHexStringOrNull(value: unknown): Nullable<string> {
  if (!isString(value) || !utils.isHex(value as string)) {
    return null;
  }

  return value;
}
