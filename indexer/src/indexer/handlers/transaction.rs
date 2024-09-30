use crate::db;
use anyhow::Result;
use miden_objects::utils::Serializable;

pub async fn transaction_handler(
    db_tx: &mut sqlx::Transaction<'_, sqlx::Postgres>,
    block: miden_objects::block::Block,
) -> Result<()> {
    let mut database_transactions: Vec<db::models::DatabaseTransaction> = Vec::new();

    for updated_account in block.updated_accounts() {
        for (block_updated_account_transaction_index_usize, transaction_id) in
            updated_account.transactions().iter().enumerate()
        {
            let block_updated_account_transaction_index =
                u32::try_from(block_updated_account_transaction_index_usize)?;

            let mut account_id = updated_account.account_id().to_bytes().to_vec();
            account_id.reverse();
            database_transactions.push(db::models::DatabaseTransaction {
                transaction_id: transaction_id.as_bytes().to_vec(),
                account_id: account_id,
                block_updated_account_transaction_index: block_updated_account_transaction_index,
                block_hash: block.header().hash().as_bytes().to_vec(),
                block_number: block.header().block_num(),
            })
        }
    }
    db::transaction::insert_transactions(db_tx, database_transactions).await?;

    Ok(())
}
