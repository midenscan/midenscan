import React from "react";
import { graphql, useFragment } from "react-relay";

import { NotePageOverviewTabFragment_note$key } from "libs/types/__generated__/NotePageOverviewTabFragment_note.graphql";

import {
  BaseItem,
  HashItem,
  BlockNumberItem,
} from "components/modules/Overview";
import * as tooltipMessages from "libs/tooltipMessages";
import * as paths from "libs/paths";
import { NoteTypeItem } from "../../NoteTypeItem";
import { NoteStatusItem } from "../../NoteStatusItem";

const NotePageOverviewTabFragmentGRAPHQL = graphql`
  fragment NotePageOverviewTabFragment_note on Note {
    note_id
    block_batch_index
    block_note_index_in_batch
    recipient
    sender
    note_type
    note_tag
    note_aux
    nullifier

    block_number
    note_status
  }
`;

export function NotePageOverviewTab({
  noteKey,
}: {
  noteKey: NotePageOverviewTabFragment_note$key;
}) {
  const note = useFragment(NotePageOverviewTabFragmentGRAPHQL, noteKey);

  return (
    <dl className="sm:divide-y sm:divide-gray-200 dark:sm:divide-gray-600">
      <HashItem
        title="Note ID"
        titleTooltipMsg={tooltipMessages.NOTE_ID}
        hash={note.note_id}
        href={paths.note(note.note_id)}
      />
      <NoteStatusItem noteStatus={note.note_status} />
      {note.nullifier ? (
        <HashItem
          title="Nullifier"
          titleTooltipMsg={tooltipMessages.NOTE_NULLIFIER}
          hash={note.nullifier}
          href={paths.nullifier(note.nullifier)}
        />
      ) : null}
      <NoteTypeItem noteType={note.note_type} />
      <BaseItem
        title="Batch Index"
        titleTooltipMsg={tooltipMessages.BATCH_INDEX}
        displayValue={note.block_batch_index}
      />
      <BaseItem
        title="Note Index in Batch"
        titleTooltipMsg={tooltipMessages.NOTE_INDEX_IN_BATCH}
        displayValue={note.block_note_index_in_batch}
      />
      {note.recipient ? (
        <HashItem
          title="Recipient"
          titleTooltipMsg={tooltipMessages.RECEIPIENT}
          hash={note.recipient}
        />
      ) : null}
      {note.sender ? (
        <HashItem
          title="Sender"
          titleTooltipMsg={tooltipMessages.SENDER}
          hash={note.sender}
          href={paths.account(note.sender)}
        />
      ) : null}
      <BaseItem
        title="Note Tag"
        titleTooltipMsg={"Metadata used for note routing."}
        displayValue={note.note_tag}
      />
      <BaseItem
        title="Note Aux"
        titleTooltipMsg={"Arbitrary user-defined data."}
        displayValue={note.note_aux}
      />
      <BlockNumberItem
        blockNumber={note.block_number}
        tooltipMessage={tooltipMessages.NOTE_COMMITTED_BLOCK_NUMBER}
      />
    </dl>
  );
}
