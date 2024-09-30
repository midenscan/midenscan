use miden_objects::{accounts::AccountType, notes::NoteType};

#[derive(Debug, Clone, sqlx::FromRow)]
pub struct DatabaseRef {
    pub block_hash: Vec<u8>,
    pub block_number: i32,
}

#[derive(Debug, Clone)]
pub struct DatabaseBlock {
    pub block_hash: Vec<u8>,
    pub block_number: u32,
    pub version: u32,
    pub timestamp: u32,
    pub chain_root: Vec<u8>,
    pub account_root: Vec<u8>,
    pub nullifier_root: Vec<u8>,
    pub note_root: Vec<u8>,
    pub tx_hash: Vec<u8>,
    pub proof_hash: Vec<u8>,
    pub sub_hash: Vec<u8>,
    pub number_of_transactions: u32,
}

#[derive(Debug, Clone)]
pub struct DatabaseAccount {
    pub account_id: Vec<u8>,
    pub is_private: bool,
    pub block_updated_account_index: u32,
    pub block_hash: Vec<u8>,
    pub block_number: u32,

    pub account_type: Option<DatabaseMidenAccountType>,
    pub is_faucet: Option<bool>,
    pub code_procedures: Option<Vec<String>>,
}

#[derive(Debug, Clone)]
pub struct DatabaseAccountUpdate {
    // {account_id}_{block_hash}
    pub account_update_id: String,
    pub account_id: Vec<u8>,
    pub block_updated_account_index: u32,
    pub block_hash: Vec<u8>,
    pub block_number: u32,
    pub state_hash: Vec<u8>,
    pub nonce: Option<u64>,
}

#[derive(Debug, Clone)]
pub struct DatabaseAccountVaultAsset {
    // {account_id}_{faucet_id}
    pub account_vault_asset_id: String,
    pub account_id: Vec<u8>,
    pub faucet_id: Vec<u8>,
    pub amount: i64,
}

#[derive(Debug, Clone)]
pub struct DatabaseTransaction {
    pub transaction_id: Vec<u8>,
    pub account_id: Vec<u8>,
    pub block_updated_account_transaction_index: u32,
    pub block_hash: Vec<u8>,
    pub block_number: u32,
}

#[derive(Debug, Clone)]
pub struct DatabaseNote {
    pub note_id: Vec<u8>,

    pub block_hash: Vec<u8>,
    pub block_number: u32,
    pub block_batch_index: u64,
    pub block_note_index_in_batch: u64,
    pub recipient: Option<Vec<u8>>,

    pub sender: Vec<u8>,
    pub note_type: DatabaseMidenNoteType,
    pub note_tag: u32,
    pub note_aux: u64,

    pub nullifier: Option<Vec<u8>>,
    pub script_code: Option<String>,
    pub inputs: Option<Vec<u64>>,
}

#[derive(Debug, Clone)]
pub struct DatabaseNoteAsset {
    // {note_id}_{faucet_id}
    pub note_asset_id: String,
    pub note_id: Vec<u8>,
    pub faucet_id: Vec<u8>,
    pub amount: u64,
}

#[derive(Debug, Clone)]
pub struct DatabaseNullifier {
    pub nullifier: Vec<u8>,
    pub block_created_nullifier_index: u32,
    pub block_hash: Vec<u8>,
    pub block_number: u32,
}

#[derive(sqlx::Type, Debug, Clone)]
#[sqlx(type_name = "miden_account_type")]
pub enum DatabaseMidenAccountType {
    FungibleFaucet,
    NonFungibleFaucet,
    RegularAccountImmutableCode,
    RegularAccountUpdatableCode,
}

impl From<AccountType> for DatabaseMidenAccountType {
    fn from(account_type: AccountType) -> Self {
        match account_type {
            AccountType::FungibleFaucet => DatabaseMidenAccountType::FungibleFaucet,
            AccountType::NonFungibleFaucet => DatabaseMidenAccountType::NonFungibleFaucet,
            AccountType::RegularAccountImmutableCode => {
                DatabaseMidenAccountType::RegularAccountImmutableCode
            }
            AccountType::RegularAccountUpdatableCode => {
                DatabaseMidenAccountType::RegularAccountUpdatableCode
            }
        }
    }
}

#[derive(sqlx::Type, Debug, Clone)]
#[sqlx(type_name = "miden_note_type")]
pub enum DatabaseMidenNoteType {
    Private,
    Encrypted,
    Public,
}

impl From<NoteType> for DatabaseMidenNoteType {
    fn from(note_type: NoteType) -> Self {
        match note_type {
            NoteType::Private => DatabaseMidenNoteType::Private,
            NoteType::Encrypted => DatabaseMidenNoteType::Encrypted,
            NoteType::Public => DatabaseMidenNoteType::Public,
        }
    }
}
