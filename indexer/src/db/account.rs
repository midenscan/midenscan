use super::models;
use crate::utils;
use anyhow::Result;
use sqlx::{types::BigDecimal, QueryBuilder};

pub async fn insert_or_ignore_accounts(
    db_tx: &mut sqlx::Transaction<'_, sqlx::Postgres>,
    accounts: Vec<models::DatabaseAccount>,
) -> Result<(), sqlx::Error> {
    if accounts.is_empty() {
        return Ok(());
    }

    let mut query_builder: QueryBuilder<'_, sqlx::Postgres> = QueryBuilder::new(
        "INSERT INTO account (
                account_id,
                is_private,
                block_updated_account_index,
                block_hash,
                block_number,
                account_type,
                is_faucet,
                code_procedure
            ) ",
    );
    query_builder.push_values(accounts, |mut b, account| {
        b.push_bind(account.account_id)
            .push_bind(account.is_private)
            .push_bind(BigDecimal::from(account.block_updated_account_index))
            .push_bind(account.block_hash)
            .push_bind(BigDecimal::from(account.block_number))
            .push_bind(account.account_type)
            .push_bind(account.is_faucet)
            .push_bind(account.code_procedures);
    });
    query_builder.push(" ON CONFLICT (account_id) DO NOTHING");

    let query = query_builder.build();
    query.execute(&mut **db_tx).await?;

    Ok(())
}

pub async fn insert_account_updates(
    db_tx: &mut sqlx::Transaction<'_, sqlx::Postgres>,
    account_updates: Vec<models::DatabaseAccountUpdate>,
) -> Result<(), sqlx::Error> {
    if account_updates.is_empty() {
        return Ok(());
    }

    let mut query_builder: QueryBuilder<'_, sqlx::Postgres> = QueryBuilder::new(
        "INSERT INTO account_update (
                account_update_id,
                account_id,
                block_updated_account_index,
                block_hash,
                block_number,
                state_hash,
                nonce
            ) 
            ",
    );
    query_builder.push_values(account_updates, |mut b, account_update| {
        b.push_bind(account_update.account_update_id)
            .push_bind(account_update.account_id)
            .push_bind(BigDecimal::from(account_update.block_updated_account_index))
            .push_bind(account_update.block_hash)
            .push_bind(BigDecimal::from(account_update.block_number))
            .push_bind(account_update.state_hash)
            .push_bind(utils::format::convert_option_u64_to_bigdecimal(
                account_update.nonce,
            ));
    });

    let query = query_builder.build();
    query.execute(&mut **db_tx).await?;

    Ok(())
}

pub async fn insert_account_vault_assets_changes(
    db_tx: &mut sqlx::Transaction<'_, sqlx::Postgres>,
    account_vault_assets_added: Vec<models::DatabaseAccountVaultAsset>,
) -> Result<(), sqlx::Error> {
    if account_vault_assets_added.is_empty() {
        return Ok(());
    }

    let mut query_builder: QueryBuilder<'_, sqlx::Postgres> = QueryBuilder::new(
        "INSERT INTO account_vault_asset (
                account_vault_asset_id,
                account_id,
                faucet_id,
                amount
            ) 
            ",
    );
    query_builder.push_values(account_vault_assets_added, |mut b, account_vault_asset| {
        b.push_bind(account_vault_asset.account_vault_asset_id)
            .push_bind(account_vault_asset.account_id)
            .push_bind(account_vault_asset.faucet_id)
            .push_bind(BigDecimal::from(account_vault_asset.amount));
    });

    query_builder.push(
        " ON CONFLICT (account_vault_asset_id) DO UPDATE SET 
            amount = account_vault_asset.amount + EXCLUDED.amount",
    );

    let query = query_builder.build();
    query.execute(&mut **db_tx).await?;

    Ok(())
}
