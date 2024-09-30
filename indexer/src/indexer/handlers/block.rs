use crate::db;
use anyhow::Result;
use miden_objects;

pub async fn block_handler(
    db_tx: &mut sqlx::Transaction<'_, sqlx::Postgres>,
    block: miden_objects::block::Block,
) -> Result<()> {
    db::block::insert_block(
        db_tx,
        db::models::DatabaseBlock {
            block_hash: block.header().hash().as_bytes().to_vec(),
            block_number: block.header().block_num(),
            version: block.header().version(),
            timestamp: block.header().timestamp(),

            chain_root: block.header().chain_root().as_bytes().to_vec(),
            account_root: block.header().account_root().as_bytes().to_vec(),
            nullifier_root: block.header().nullifier_root().as_bytes().to_vec(),
            note_root: block.header().note_root().as_bytes().to_vec(),
            tx_hash: block.header().tx_hash().as_bytes().to_vec(),
            proof_hash: block.header().proof_hash().as_bytes().to_vec(),
            sub_hash: block.header().sub_hash().as_bytes().to_vec(),

            number_of_transactions: u32::try_from(block.transactions().count())?,
        },
    )
    .await?;

    Ok(())
}
