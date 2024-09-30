use super::models;
use anyhow::Result;
use sqlx::{types::BigDecimal, QueryBuilder};

pub async fn insert_notes(
    db_tx: &mut sqlx::Transaction<'_, sqlx::Postgres>,
    notes: Vec<models::DatabaseNote>,
) -> Result<(), sqlx::Error> {
    if notes.is_empty() {
        return Ok(());
    }

    let mut query_builder: QueryBuilder<'_, sqlx::Postgres> = QueryBuilder::new(
        "INSERT INTO note (
            note_id,
            block_batch_index,
            block_note_index_in_batch,
            recipient,
            sender,
            note_type,
            note_tag,
            note_aux,
            nullifier,
            script_code,
            inputs,
            block_hash,
            block_number
        ) ",
    );

    // let note_inputs: Vec<BigDecimal> = note.inputs.iter().map(|&v| BigDecimal::from(v)).collect();
    query_builder.push_values(notes, |mut b, note| {
        let note_inputs: Option<Vec<BigDecimal>> = note
            .inputs
            .as_ref()
            .map(|inputs| inputs.iter().map(|&v| BigDecimal::from(v)).collect());
        b.push_bind(note.note_id)
            .push_bind(BigDecimal::from(note.block_batch_index))
            .push_bind(BigDecimal::from(note.block_note_index_in_batch))
            .push_bind(note.recipient)
            .push_bind(note.sender)
            .push_bind(note.note_type)
            .push_bind(BigDecimal::from(note.note_tag))
            .push_bind(BigDecimal::from(note.note_aux))
            .push_bind(note.nullifier)
            .push_bind(note.script_code)
            .push_bind(note_inputs)
            .push_bind(note.block_hash)
            .push_bind(BigDecimal::from(note.block_number));
    });

    let query = query_builder.build();
    query.execute(&mut **db_tx).await?;

    Ok(())
}

pub async fn insert_note_assets(
    db_tx: &mut sqlx::Transaction<'_, sqlx::Postgres>,
    note_assets: Vec<models::DatabaseNoteAsset>,
) -> Result<(), sqlx::Error> {
    if note_assets.is_empty() {
        return Ok(());
    }

    let mut query_builder: QueryBuilder<'_, sqlx::Postgres> = QueryBuilder::new(
        "INSERT INTO note_asset (
            note_asset_id,
            note_id,
            faucet_id,
            amount
        ) ",
    );
    query_builder.push_values(note_assets, |mut b, note_asset| {
        b.push_bind(note_asset.note_asset_id)
            .push_bind(note_asset.note_id)
            .push_bind(note_asset.faucet_id)
            .push_bind(BigDecimal::from(note_asset.amount));
    });

    let query = query_builder.build();
    query.execute(&mut **db_tx).await?;

    Ok(())
}
