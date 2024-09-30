use super::models;
use anyhow::Result;
use sqlx::{types::BigDecimal, QueryBuilder};

pub async fn insert_nullifiers(
    db_tx: &mut sqlx::Transaction<'_, sqlx::Postgres>,
    nullifiers: Vec<models::DatabaseNullifier>,
) -> Result<(), sqlx::Error> {
    if nullifiers.is_empty() {
        return Ok(());
    }

    let mut query_builder: QueryBuilder<'_, sqlx::Postgres> = QueryBuilder::new(
        "INSERT INTO nullifier (
            nullifier,
            block_created_nullifier_index,
            block_hash,
            block_number
        ) ",
    );
    query_builder.push_values(nullifiers, |mut b, nullifier| {
        b.push_bind(nullifier.nullifier)
            .push_bind(BigDecimal::from(nullifier.block_created_nullifier_index))
            .push_bind(nullifier.block_hash)
            .push_bind(BigDecimal::from(nullifier.block_number));
    });

    let query = query_builder.build();
    query.execute(&mut **db_tx).await?;

    Ok(())
}
