import { Knex } from "knex";

// DEVNOTE: use with caution to use env variables
require("dotenv").config({ path: "../.env" });

const config: Knex.Config = {
  client: "pg",
  connection: {
    // DEVNOTE: use with caution to use env variables
    connectionString: process.env.POSTGRES_URL,
    // connectionString: "postgresql://postgres:postgres@localhost:5432/postgres",
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "migrations",
  },
};

export default config;
