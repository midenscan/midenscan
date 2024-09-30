use crate::db;
use anyhow::Result;
use miden_objects::{
    assets::Asset::{Fungible, NonFungible},
    transaction::OutputNote,
    utils::Serializable,
};

pub async fn note_handler(
    db_tx: &mut sqlx::Transaction<'_, sqlx::Postgres>,
    block: miden_objects::block::Block,
) -> Result<()> {
    let mut database_notes: Vec<db::models::DatabaseNote> = Vec::new();
    let mut database_note_assets: Vec<db::models::DatabaseNoteAsset> = Vec::new();
    for (block_note_index, output_note) in block.notes() {
        let note_metadata = output_note.metadata();
        let recipient: Option<Vec<u8>> = match output_note.recipient_digest() {
            Some(value) => Some(value.as_bytes().to_vec()),
            None => None,
        };

        let note_id = output_note.id().as_bytes().to_vec();
        let note_metadata_tag: u32 = note_metadata.tag().into();
        let mut note_sender = note_metadata.sender().to_bytes().to_vec();
        note_sender.reverse();
        let mut database_note = db::models::DatabaseNote {
            note_id: note_id.clone(),
            block_batch_index: block_note_index.batch_idx() as u64,
            block_note_index_in_batch: block_note_index.note_idx_in_batch() as u64,

            recipient: recipient,
            sender: note_sender,
            note_type: db::models::DatabaseMidenNoteType::from(note_metadata.note_type()),
            note_tag: note_metadata_tag,
            note_aux: note_metadata.aux().into(),

            // Only for full notes, added later
            nullifier: None,
            script_code: None,
            inputs: None,

            block_hash: block.header().hash().as_bytes().to_vec(),
            block_number: block.header().block_num(),
        };
        if let OutputNote::Full(note) = output_note {
            database_note.nullifier = Some(note.nullifier().inner().as_bytes().to_vec());
            let script_code = format!("{}", note.script());
            database_note.script_code = Some(script_code);
            database_note.inputs =
                Some(note.inputs().values().iter().map(|v| v.as_int()).collect());
        }
        database_notes.push(database_note);

        if let Some(note_assets) = output_note.assets() {
            for asset in note_assets.iter() {
                let mut faucet_id = asset.faucet_id().to_bytes().to_vec();
                faucet_id.reverse();
                let amount: u64 = match asset {
                    Fungible(asset) => asset.amount(),
                    NonFungible(_) => 1,
                };
                database_note_assets.push(db::models::DatabaseNoteAsset {
                    note_asset_id: format!(
                        "{}_{}",
                        output_note.id().to_hex(),
                        asset.faucet_id().to_hex(),
                    ),
                    note_id: note_id.clone(),
                    faucet_id: faucet_id,
                    amount: amount,
                });
            }
        }
    }
    db::note::insert_notes(db_tx, database_notes).await?;
    db::note::insert_note_assets(db_tx, database_note_assets).await?;

    Ok(())
}
