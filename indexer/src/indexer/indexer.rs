use super::handlers;
use crate::db;
use crate::rpc;

use anyhow::Result;

pub struct IndexerConfig {
    pub rpc_url: String,
    pub postgres_url: String,
}
pub async fn start(indexer_config: IndexerConfig) {
    println!("Starting Indexer...");

    loop {
        match run_handlers(&indexer_config).await {
            Ok(_) => {}
            Err(e) => {
                println!("Error: {}", e);
                tokio::time::sleep(std::time::Duration::from_millis(500)).await;
            }
        }
    }
}

async fn run_handlers(indexer_config: &IndexerConfig) -> Result<()> {
    let rpc: rpc::rpc::Rpc = rpc::rpc::Rpc::new(&indexer_config.rpc_url);
    let db = db::db::Database::new(&indexer_config.postgres_url).await;

    db.execute_transaction(|db_tx| {
        Box::pin(async move {
            let now = std::time::Instant::now();

            let db_state_ref = db::state_ref::get_ref(db_tx).await?;
            let block = rpc
                .get_block_by_number((db_state_ref.block_number + 1) as u32)
                .await?;

            handlers::block::block_handler(db_tx, block.clone()).await?;
            handlers::account::account_handler(db_tx, block.clone()).await?;
            handlers::transaction::transaction_handler(db_tx, block.clone()).await?;
            handlers::note::note_handler(db_tx, block.clone()).await?;
            handlers::nullifier::nullifier_handler(db_tx, block.clone()).await?;

            db::state_ref::update_ref(
                db_tx,
                db::models::DatabaseRef {
                    block_hash: block.header().hash().as_bytes().to_vec(),
                    block_number: block.header().block_num() as i32,
                },
            )
            .await?;
            println!(
                "Indexed Block: {}, took {:.2?}",
                block.header().block_num(),
                now.elapsed()
            );

            Ok(())
        })
    })
    .await?;

    Ok(())
}
