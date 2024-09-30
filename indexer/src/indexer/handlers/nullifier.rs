use crate::db;
use anyhow::Result;

pub async fn nullifier_handler(
    db_tx: &mut sqlx::Transaction<'_, sqlx::Postgres>,
    block: miden_objects::block::Block,
) -> Result<()> {
    let mut database_nullifiers: Vec<db::models::DatabaseNullifier> = Vec::new();
    for (block_created_nullifier_index_usize, nullifier) in block.nullifiers().iter().enumerate() {
        let block_created_nullifier_index = u32::try_from(block_created_nullifier_index_usize)?;
        database_nullifiers.push(db::models::DatabaseNullifier {
            nullifier: nullifier.inner().as_bytes().to_vec(),
            block_created_nullifier_index: block_created_nullifier_index,
            block_hash: block.header().hash().as_bytes().to_vec(),
            block_number: block.header().block_num(),
        });
    }
    db::nullifier::insert_nullifiers(db_tx, database_nullifiers).await?;

    Ok(())
}
