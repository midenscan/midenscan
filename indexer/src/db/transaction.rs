use super::models;
use anyhow::Result;
use sqlx::{types::BigDecimal, QueryBuilder};

pub async fn insert_transactions(
    db_tx: &mut sqlx::Transaction<'_, sqlx::Postgres>,
    transactions: Vec<models::DatabaseTransaction>,
) -> Result<(), sqlx::Error> {
    if transactions.is_empty() {
        return Ok(());
    }

    let mut query_builder: QueryBuilder<'_, sqlx::Postgres> = QueryBuilder::new(
        "INSERT INTO transaction (
                transaction_id,
                account_id,
                block_updated_account_transaction_index,
                block_hash,
                block_number
            )",
    );
    query_builder.push_values(transactions, |mut b, transaction| {
        b.push_bind(transaction.transaction_id)
            .push_bind(transaction.account_id)
            .push_bind(BigDecimal::from(
                transaction.block_updated_account_transaction_index,
            ))
            .push_bind(transaction.block_hash)
            .push_bind(BigDecimal::from(transaction.block_number));
    });

    let query = query_builder.build();
    query.execute(&mut **db_tx).await?;

    Ok(())
}
