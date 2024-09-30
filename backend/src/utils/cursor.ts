import { isNullOrUndefined } from "utils";

// Helper function to hash and unhash the cursors
const cursorHashSeperator = "__";
export function hashCursorData(fields: string[]): string {
  return Buffer.from(fields.join(cursorHashSeperator)).toString("base64");
}

export function unhashCursorData(hash: string): string[] {
  const rawData = Buffer.from(hash, "base64").toString("ascii");
  return rawData.split(cursorHashSeperator);
}
