export function addHexPrefix(hex: string): string {
  return `0x${removeHexPrefix(hex)}`;
}

export function removeHexPrefix(hex: string): string {
  return hex.replace(/^0x/i, "");
}

export function isHex(hex: string): boolean {
  return /^0x[0-9a-f]*$/i.test(hex);
}

const POSITIVE_INTEGER_REGEX = /^\d+$/;
export function isPositiveInteger(value: unknown) {
  if (typeof value === "number") {
    return !isNaN(value) && value >= 0 && Number.isInteger(value);
  }

  if (typeof value === "string") {
    return POSITIVE_INTEGER_REGEX.test(value);
  }

  return false;
}

export function removeLeadingZerosFromHexString(value: string): string {
  const prefix = value.startsWith("0x") ? "0x" : "";
  const stringWithoutPrefix = value.startsWith("0x") ? value.slice(2) : value;
  const stringWithoutLeadingZeros = stringWithoutPrefix.replace(/^0+/, "");

  // Check if stringWithoutLeadingZeros is empty and return '0x0' if it is
  return (
    prefix +
    (stringWithoutLeadingZeros === "" ? "0" : stringWithoutLeadingZeros)
  );
}

const DIGEST_LENGTH = 64;
export function digestToBuffer(value: string): Buffer {
  const valueWithoutLeadingZeros = removeLeadingZerosFromHexString(value);
  return Buffer.from(
    removeHexPrefix(valueWithoutLeadingZeros).padStart(DIGEST_LENGTH, "0"),
    "hex"
  );
}

export function bufferToDigest(value: Buffer): string {
  const paddedHexString = addHexPrefix(
    value.toString("hex").padStart(DIGEST_LENGTH, "0")
  );
  return paddedHexString.toLowerCase();
}

const ACCOUNT_LENGTH = 16;
export function accountToBuffer(value: string): Buffer {
  const valueWithoutLeadingZeros = removeLeadingZerosFromHexString(value);
  return Buffer.from(
    removeHexPrefix(valueWithoutLeadingZeros).padStart(ACCOUNT_LENGTH, "0"),
    "hex"
  );
}

export function bufferToAccount(value: Buffer): string {
  const paddedHexString = addHexPrefix(
    value.toString("hex").padStart(ACCOUNT_LENGTH, "0")
  );
  return paddedHexString.toLowerCase();
}

export async function waitFor(milliseconds: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
}

export function isNullOrUndefined(value: unknown): boolean {
  return value === null || value === undefined;
}

export function rejectNotHandledSwitchStatement(res: never): never {
  throw new Error(
    `should not be possible, used to handle type guarded switch statements ${res}`
  );
}

export function getValueOrNullFromPromiseSettled(
  promiseSettled: PromiseSettledResult<any>
) {
  return promiseSettled.status === "fulfilled" ? promiseSettled.value : null;
}

export function isStringOrNumber(val: unknown) {
  return typeof val === "string" || typeof val === "number";
}

const ONE_SECOND_IN_MILLIS = 1000n;
export function getCurrentUnixTimestampSeconds(): bigint {
  return BigInt(Math.floor(Date.now() / Number(ONE_SECOND_IN_MILLIS)));
}
