-- Create domains
CREATE DOMAIN bytea_digest AS bytea CHECK(length(value) = 32);
CREATE DOMAIN bytea_account AS bytea CHECK(length(value) = 8);
CREATE DOMAIN numeric_20_0 AS numeric(20, 0);

-- Create enum types
CREATE TYPE miden_account_type AS ENUM (
    'FungibleFaucet',
    'NonFungibleFaucet',
    'RegularAccountImmutableCode',
    'RegularAccountUpdatableCode'
);

CREATE TYPE miden_note_type AS ENUM (
    'Private',
    'Encrypted',
    'Public'
);

-- Create tables
CREATE TABLE ref (
    id integer PRIMARY KEY,
    block_hash bytea_digest NOT NULL,
    block_number integer NOT NULL
);

INSERT INTO ref (id, block_hash, block_number)
VALUES (0, E'\\x0000000000000000000000000000000000000000000000000000000000000000', -1);

CREATE TABLE block (
    block_hash bytea_digest PRIMARY KEY,
    block_number bigint NOT NULL UNIQUE,
    version bigint NOT NULL,
    timestamp bigint NOT NULL,
    chain_root bytea_digest NOT NULL,
    account_root bytea_digest NOT NULL,
    nullifier_root bytea_digest NOT NULL,
    note_root bytea_digest NOT NULL,
    tx_hash bytea_digest NOT NULL,
    proof_hash bytea_digest NOT NULL,
    sub_hash bytea_digest NOT NULL,
    number_of_transactions bigint NOT NULL
);

CREATE TABLE account (
    account_id bytea_account PRIMARY KEY,
    is_private boolean NOT NULL,
    block_updated_account_index integer NOT NULL,
    block_hash bytea_digest NOT NULL,
    block_number bigint NOT NULL,
    account_type miden_account_type NULL,
    is_faucet boolean NULL,
    code_procedure text[] NULL
);

CREATE TABLE account_update (
    account_update_id text PRIMARY KEY,
    account_id bytea_account NOT NULL,
    block_updated_account_index integer NOT NULL,
    block_hash bytea_digest NOT NULL,
    block_number bigint NOT NULL,
    state_hash bytea_digest NOT NULL,
    nonce numeric_20_0 NULL
);

CREATE TABLE account_vault_asset (
    account_vault_asset_id text PRIMARY KEY,
    account_id bytea_account NOT NULL,
    faucet_id bytea_account NOT NULL,
    amount numeric_20_0 NOT NULL
);

CREATE TABLE transaction (
    transaction_id bytea_digest PRIMARY KEY,
    account_id bytea_account NOT NULL,
    block_updated_account_transaction_index integer NOT NULL,
    block_hash bytea_digest NOT NULL,
    block_number bigint NOT NULL
);

CREATE TABLE note (
    note_id bytea_digest PRIMARY KEY,
    block_hash bytea_digest NOT NULL,
    block_number bigint NOT NULL,
    block_batch_index numeric_20_0 NOT NULL,
    block_note_index_in_batch numeric_20_0 NOT NULL,
    recipient bytea_digest NULL,
    sender bytea_account NOT NULL,
    note_type miden_note_type NOT NULL,
    note_tag bigint NOT NULL,
    note_aux numeric_20_0 NOT NULL,
    nullifier bytea_digest NULL,
    script_code text NULL,
    inputs numeric_20_0[] NULL
);

CREATE TABLE note_asset (
    note_asset_id text PRIMARY KEY,
    note_id bytea_digest NOT NULL,
    faucet_id bytea_account NOT NULL,
    amount numeric_20_0 NOT NULL
);

CREATE TABLE nullifier (
    nullifier bytea_digest PRIMARY KEY,
    block_created_nullifier_index integer NOT NULL,
    block_hash bytea_digest NOT NULL,
    block_number bigint NOT NULL
);