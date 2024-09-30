use crate::db;
use anyhow::Result;
use miden_objects::{
    accounts::delta::AccountUpdateDetails,
    accounts::NonFungibleDeltaAction,
    assets::Asset::{Fungible, NonFungible},
    utils::Serializable,
};

pub async fn account_handler(
    db_tx: &mut sqlx::Transaction<'_, sqlx::Postgres>,
    block: miden_objects::block::Block,
) -> Result<()> {
    let mut database_accounts: Vec<db::models::DatabaseAccount> = Vec::new();
    let mut database_account_updates: Vec<db::models::DatabaseAccountUpdate> = Vec::new();
    let mut database_account_vault_assets_changes: Vec<db::models::DatabaseAccountVaultAsset> =
        Vec::new();
    for (block_updated_account_index_usize, updated_account) in
        block.updated_accounts().iter().enumerate()
    {
        let block_updated_account_index = u32::try_from(block_updated_account_index_usize)?;
        let mut account_id = updated_account.account_id().to_bytes().to_vec();
        account_id.reverse();

        let mut database_account = db::models::DatabaseAccount {
            account_id: account_id.clone(),
            is_private: updated_account.is_private(),

            block_updated_account_index: block_updated_account_index,
            block_hash: block.header().hash().as_bytes().to_vec(),
            block_number: block.header().block_num(),

            account_type: None,
            is_faucet: None,
            code_procedures: None,
        };
        let mut database_account_update = db::models::DatabaseAccountUpdate {
            account_update_id: format!(
                "{}_{}",
                updated_account.account_id().to_hex(),
                block.header().hash().to_hex()
            ),
            account_id: account_id.clone(),
            block_updated_account_index: block_updated_account_index,
            block_hash: block.header().hash().as_bytes().to_vec(),
            block_number: block.header().block_num(),
            state_hash: updated_account.new_state_hash().as_bytes().to_vec(),
            nonce: None,
        };

        match updated_account.details() {
            AccountUpdateDetails::New(account) => {
                database_account.account_type = Some(db::models::DatabaseMidenAccountType::from(
                    account.account_type(),
                ));
                database_account.is_faucet = Some(account.is_faucet());
                let account_code_procedures: Vec<String> = account
                    .code()
                    .procedures()
                    .iter()
                    .map(|digest| digest.mast_root().to_hex())
                    .collect();
                database_account.code_procedures = Some(account_code_procedures);
                database_account_update.nonce = Some(account.nonce().into());

                for account_asset in account.vault().assets() {
                    let mut faucet_id = account_asset.faucet_id().to_bytes().to_vec();
                    faucet_id.reverse();
                    let amount: i64 = match account_asset {
                        // DEVNOTE: Using i64 as assets cannot exceed 2^63
                        Fungible(asset) => asset.amount() as i64,
                        NonFungible(_) => 1,
                    };
                    database_account_vault_assets_changes.push(
                        db::models::DatabaseAccountVaultAsset {
                            account_vault_asset_id: format!(
                                "{}_{}",
                                updated_account.account_id().to_hex(),
                                account_asset.faucet_id().to_hex(),
                            ),
                            account_id: account_id.clone(),
                            faucet_id: faucet_id,
                            amount: amount,
                        },
                    );
                }
            }
            AccountUpdateDetails::Delta(account_delta) => {
                match account_delta.nonce() {
                    Some(nonce) => {
                        database_account_update.nonce = Some(nonce.into());
                    }
                    None => {}
                }

                let account_delta_vault = account_delta.vault();
                for (faucet_id, amount) in account_delta_vault.fungible().iter() {
                    let mut faucet_id_formatted = faucet_id.to_bytes().to_vec();
                    faucet_id_formatted.reverse();

                    database_account_vault_assets_changes.push(
                        db::models::DatabaseAccountVaultAsset {
                            account_vault_asset_id: format!(
                                "{}_{}",
                                updated_account.account_id().to_hex(),
                                faucet_id.to_hex(),
                            ),
                            account_id: account_id.clone(),
                            faucet_id: faucet_id_formatted,
                            amount: *amount,
                        },
                    );
                }
                for (non_fungible_asset, non_fungible_delta) in
                    account_delta_vault.non_fungible().iter()
                {
                    let mut faucet_id_formatted =
                        non_fungible_asset.faucet_id().to_bytes().to_vec();
                    faucet_id_formatted.reverse();
                    let amount: i64 = match non_fungible_delta {
                        NonFungibleDeltaAction::Add => 1,
                        NonFungibleDeltaAction::Remove => -1,
                    };
                    database_account_vault_assets_changes.push(
                        db::models::DatabaseAccountVaultAsset {
                            account_vault_asset_id: format!(
                                "{}_{}",
                                updated_account.account_id().to_hex(),
                                non_fungible_asset.faucet_id().to_hex(),
                            ),
                            account_id: account_id.clone(),
                            faucet_id: faucet_id_formatted,
                            amount: amount.into(),
                        },
                    );
                }
            }
            AccountUpdateDetails::Private => {}
        }
        database_accounts.push(database_account);
        database_account_updates.push(database_account_update);
    }
    db::account::insert_or_ignore_accounts(db_tx, database_accounts).await?;
    db::account::insert_account_updates(db_tx, database_account_updates).await?;
    db::account::insert_account_vault_assets_changes(db_tx, database_account_vault_assets_changes)
        .await?;

    Ok(())
}
