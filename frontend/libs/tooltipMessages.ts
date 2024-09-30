export const BLOCK_NUMBER = "The order of the block on the chain.";
export const BLOCK_HASH = "The hash that identifies the block.";
export const BLOCK_TIMESTAMP =
  "The date and time when the block is constructed.";
export const BLOCK_AGE = "How long ago the block was constructed.";

export const ACCOUNT_UPDATE_PAGE_DESCRIPTION =
  "Account state updates on the Miden blockchain.";

export const NOTES_PAGE_DESCRIPTION = "Notes on the Miden blockchain.";

export const BLOCKS_PAGE_DESCRIPTION =
  "Blocks of data on the Miden blockchain.";

export const ACCOUNT_PAGE_DESCRIPTION =
  "Accounts represent a user or an autonomous smart contract.";

export const NOTE_PAGE_DESCRIPTION =
  "Notes interact with, and transfer assets between, accounts.";

export const TRANSACTION_ACCOUNT_ID =
  "ID of the account updated by the transaction.";
export const TRANSACTION_BLOCK_NUMBER =
  "Number of the block in which the transaction was committed.";

export const ACCOUNT_TYPE = "The type of account: regular or facuets. ";

export const ACCOUNT_ID = "A unique identifier for an account.";

export const CHAIN_ROOT = "The root hash of the blockchain.";

export const ACCOUNT_ROOT = "The root hash of the account tree.";

export const NULLIFIER_ROOT = "The root hash of the nullifier tree.";

export const NOTE_ROOT = "The root hash of the note tree.";

export const TX_HASH = "The tx hash of the batch tree.";

export const PROOF_HASH = "The hash of the zk proof.";

export const SUB_HASH = "The hash of the sub block.";

export const NOTE_TYPE =
  "Describes the note’s storage mode, either public or private.";

export const NOTE_ID = "A unique identifier for a note.";

export const BATCH_INDEX = "The index of the batch in the block.";

export const NOTE_INDEX_IN_BATCH = "The index of the note in the batch.";

export const RECEIPIENT = "The account that receives the note.";

export const SENDER = "The account that sent the note.";

export const NOTE_TAG =
  "Tags are part of the note metadata and are represented by a Felt.";

export const NOTE_AUX = "Auxiliary data of the note.";

export const NOTE_NULLIFIER = "The nullifier of the note.";

export const FUNGIBLE_FAUCET =
  "Users can issue fungible assets and customize them.";

export const NON_FUNGIBLE_FAUCET =
  "Users can issue non-fungible assets and customize them.";

export const REGULAR_ACCOUNT_IMMUTABLE =
  "For most smart contracts. Once deployed code is immutable.";

export const REGULAR_ACCOUNT_UPDATABLE =
  "For most users, e.g. a wallet. Code changes allowed, including public API.";

export const NOTE_PUBLIC =
  "Note stored on-chain in the note database with all data publicly visible for everyone.";

export const NOTE_PRIVATE =
  "Note stored off-chain by committing only the note hash to the note database.";

export const NOTE_ENCRYPTED =
  "Note stored on-chain in the note database with encrypted data.";

export const NOTE_COMMITTED_BLOCK_NUMBER =
  "Number of the block in which the note was created";

export const ACCOUNT_STATE_HASH = "The hash of the account state.";

export const ACCOUNT_NONCE =
  "A counter which increments whenever the account state changes.";

export const ACCOUNT_COMMITTED_BLOCK_NUMBER =
  "The block number when the account was committed.";

export const ACCOUNT_PUBLIC =
  "Accounts with public state: The actual state is stored on-chain.";

export const ACCOUNT_PRIVATE =
  "Accounts with private state: Only the hash of the account is stored on-chain.";

export const NULLIFIER =
  "Nullifiers provide information on whether a specific note has been consumed.";

export const NUM_TXS = "The number of transactions in the block.";

export const FAUCET_ID = "A unique identifier for a faucet account.";

export const OWNER_ACCOUNT_ID = "Owner ID of the tokens.";

export const AMOUNT = "Amount of tokens owned by the account.";

export const TRANSACTION =
  "Transactions in Miden facilitate single account state changes.";

export const TRANSACTION_ID = "A unique identifier for a transaction.";

export const OWNER_NOTE_ID = "Owner ID of the note.";

export const NOTE_STATUS =
  "The status of the note, either committed, consumed, or unknown.";

export const TPS = "The average transactions per second on the latest block.";

export const ACCOUNTS =
  "Accounts are basic building blocks representing a user or an autonomous smart contract.";

export const ACCOUNT_STORAGE_MODE =
  "Accounts can be stored off-chain (private) and on-chain (public)";

export const CREATED_BLOCK_NUMBER =
  "The block number when the account was created.";

export const NOTE_INPUTS = "Used to execute the note script.";

export const NOTE_SCRIPT =
  "To be executed in the transaction in which the note is consumed.";
