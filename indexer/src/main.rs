pub mod db;
pub mod indexer;
pub mod rpc;
pub mod utils;

#[tokio::main()]
async fn main() {
    let rpc_url = std::env::var("RPC_URL").expect("RPC_URL environment variable not set");
    let postgres_url =
        std::env::var("POSTGRES_URL").expect("POSTGRES_URL environment variable not set");

    indexer::indexer::start(indexer::indexer::IndexerConfig {
        rpc_url: rpc_url.to_string(),
        postgres_url: postgres_url.to_string(),
    })
    .await;
}
