import "dotenv/config";
import sqlts from "@rmp135/sql-ts";
import { writeFile, appendFile } from "fs/promises";

const GENERATED_FILE_PATH = "./src/types/db_generated.ts";

function getBaseConfig() {
  return {
    client: "postgres",
    connection: {
      // DEVNOTE: use with caution to use env variables
      connectionString: process.env.POSTGRES_URL,
    },
    typeMap: {
      Buffer: ["bytea_digest", "bytea_account", "bytea"],
      bigint: ["int8", "numeric_20_0"],
      string: ["date"],
    },
    excludedTables: ["public.knex_migrations", "public.knex_migrations_lock"],
  };
}

export async function generate() {
  const SQLTS_CONFIG = {
    ...getBaseConfig(),
    filename: GENERATED_FILE_PATH,
    interfaceNameFormat: "DB_${table}",
    enumNameFormat: "DB_${name}",
    enumNameCasing: "pascal",
  };

  // Get base defintiion generated
  const definitions = await sqlts.toObject(SQLTS_CONFIG);
  const tsString = sqlts.fromObject(definitions, SQLTS_CONFIG);
  await writeFile(GENERATED_FILE_PATH, tsString);

  console.log("[generate] Postgres types generated: ", GENERATED_FILE_PATH);
}

export async function generateRead() {
  const SQLTS_CONFIG = {
    ...getBaseConfig(),
    filename: GENERATED_FILE_PATH,
    interfaceNameFormat: "DB_READ_${table}",

    enumNameFormat: "DB_${name}",
    enumNameCasing: "pascal",

    // DEVNOTE: not sure why typescript is throwing an error
    globalOptionality: "required" as const,
  };

  // Get base defintiion generated
  const definitions = await sqlts.toObject(SQLTS_CONFIG);

  // do not need to generate enums
  definitions.enums = [];

  const tsString = sqlts.fromObject(definitions, SQLTS_CONFIG);
  await appendFile(GENERATED_FILE_PATH, tsString);

  console.log(
    "[generateRead] Postgres read types generated: ",
    GENERATED_FILE_PATH
  );
}

export async function generateUpdate() {
  const SQLTS_CONFIG = {
    ...getBaseConfig(),
    filename: GENERATED_FILE_PATH,
    interfaceNameFormat: "DB_UPDATE_${table}",

    enumNameFormat: "DB_${name}",
    enumNameCasing: "pascal",

    // DEVNOTE: not sure why typescript is throwing an error
    globalOptionality: "optional" as const,
  };

  // Get base defintiion generated
  const definitions = await sqlts.toObject(SQLTS_CONFIG);

  // do not need to generate enums
  definitions.enums = [];

  const tsString = sqlts.fromObject(definitions, SQLTS_CONFIG);
  await appendFile(GENERATED_FILE_PATH, tsString);

  console.log(
    "[generateUpdate] Postgres update types generated: ",
    GENERATED_FILE_PATH
  );
}

(async () => {
  console.log("[generateType] init..");

  await generate();
  await generateRead();
  await generateUpdate();

  console.log("[generateType] done");
  return;
})();
