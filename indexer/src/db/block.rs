use super::models;
use anyhow::Result;
use sqlx::types::BigDecimal;

pub async fn insert_block(
    db_tx: &mut sqlx::Transaction<'_, sqlx::Postgres>,
    block: models::DatabaseBlock,
) -> Result<(), sqlx::Error> {
    sqlx::query(
        "INSERT INTO block (
        block_hash,
        block_number,
        version,
        timestamp,
        chain_root,
        account_root,
        nullifier_root,
        note_root,
        tx_hash,
        proof_hash,
        sub_hash,
        number_of_transactions
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)",
    )
    .bind(&block.block_hash)
    .bind(BigDecimal::from(block.block_number))
    .bind(BigDecimal::from(block.version))
    .bind(BigDecimal::from(block.timestamp))
    .bind(&block.chain_root)
    .bind(&block.account_root)
    .bind(&block.nullifier_root)
    .bind(&block.note_root)
    .bind(&block.tx_hash)
    .bind(&block.proof_hash)
    .bind(&block.sub_hash)
    .bind(BigDecimal::from(block.number_of_transactions))
    .execute(&mut **db_tx)
    .await?;

    Ok(())
}
