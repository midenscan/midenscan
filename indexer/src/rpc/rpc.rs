use anyhow::Result;
use miden_node_proto::generated::{requests::GetBlockByNumberRequest, rpc::api_client::ApiClient};
use miden_objects::{block::Block, utils::Deserializable};

#[derive(Debug, Clone)]
pub struct Rpc {
    pub rpc_url: String,
}

impl Rpc {
    pub fn new(url: &str) -> Self {
        Self {
            rpc_url: url.to_string(),
        }
    }

    pub async fn get_block_by_number(&self, block_num: u32) -> Result<Block> {
        let mut rpc_api = ApiClient::connect(self.rpc_url.clone()).await?;

        let request = GetBlockByNumberRequest {
            block_num: block_num,
        };
        let api_response = rpc_api
            .get_block_by_number(request)
            .await
            .map_err(|err| {
                err // Re-throw the error
            })?
            .into_inner();

        if let Some(block_data) = api_response.block {
            // Deserialize the block data using miden-objects Deserializer
            match Block::read_from_bytes(&block_data) {
                Ok(block) => Ok(block),
                Err(err) => Err(anyhow::anyhow!(format!(
                    "Could not deserialize block data: {}",
                    err
                ))),
            }
        } else {
            Err(anyhow::anyhow!("Block data is missing from the response"))
        }
    }
}
