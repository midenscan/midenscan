import * as pg from "pg";
import knex, { Knex } from "knex";
import * as config from "config";
import * as utils from "utils";
import * as validatorUtils from "utils/validators";

export function withQuery(tableName: string, trx: Nullable<Knex.Transaction>) {
  let query = db(tableName);
  if (trx) {
    query = query.transacting(trx);
  }
  return query;
}

export async function withTransaction(
  callback: (trx: Knex.Transaction) => any
): Promise<any> {
  const trx = await db.transaction();
  try {
    const result = await callback(trx);
    await trx.commit();
    return result;
  } catch (err) {
    console.log(`[withTransaction] error: ${err}`);
    await trx.rollback();
    throw err;
  }
}

export function connectionToDB(connectionString: string) {
  const knexDB = knex({
    client: "pg",
    connection: connectionString,

    // DEVNOTE: These settings are to make it compatibile with lambda
    // - lambda only terminates an instance after all db instances are terminated
    pool: {
      min: 0,
      max: 20,
      idleTimeoutMillis: 1000,
    },
  });

  // setup type parsers

  // bigint -> BigInt
  // @ts-ignore
  knexDB.context.client.driver.types.setTypeParser(
    pg.types.builtins.INT8,
    function (val) {
      return BigInt(val);
    }
  );

  // convert numeric -> BigInt if not decimal
  // @ts-ignore
  knexDB.context.client.driver.types.setTypeParser(
    pg.types.builtins.NUMERIC,
    function (val) {
      if (!utils.isNullOrUndefined(validatorUtils.getBigIntNumberOrNull(val))) {
        return BigInt(val);
      }
      return val;
    }
  );

  return knexDB;
}

const db = connectionToDB(config.POSTGRES_URL);
export default db;
