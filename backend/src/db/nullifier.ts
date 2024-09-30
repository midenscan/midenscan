import { Knex } from "knex";
import { withQuery } from "db";
import { DB_READ_nullifier } from "types";

const TABLE_NAME = "nullifier";
export function nullifierDB(trx: Nullable<Knex.Transaction>) {
  return withQuery(TABLE_NAME, trx);
}

export async function get(
  nullifier: Buffer,
  trx: Nullable<Knex.Transaction> = null
): Promise<Undefinedable<DB_READ_nullifier>> {
  return await nullifierDB(trx).where("nullifier", nullifier).first();
}

export async function getTotalCount(): Promise<bigint> {
  const totalCount = await nullifierDB(null).count("*").first();
  return totalCount.count ? BigInt(totalCount.count) : 0n;
}
