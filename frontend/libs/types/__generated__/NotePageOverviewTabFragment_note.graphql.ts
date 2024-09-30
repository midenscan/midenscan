/**
 * @generated SignedSource<<f006907eab9aced12fcf0f80d1baf3ce>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type MidenNoteStatus = "COMMITTED" | "CONSUMED" | "UNKNOWN" | "%future added value";
export type MidenNoteType = "Encrypted" | "Private" | "Public" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type NotePageOverviewTabFragment_note$data = {
  readonly block_batch_index: number;
  readonly block_note_index_in_batch: number;
  readonly block_number: number;
  readonly note_aux: number;
  readonly note_id: string;
  readonly note_status: MidenNoteStatus;
  readonly note_tag: number;
  readonly note_type: MidenNoteType;
  readonly nullifier: string | null;
  readonly recipient: string | null;
  readonly sender: string;
  readonly " $fragmentType": "NotePageOverviewTabFragment_note";
};
export type NotePageOverviewTabFragment_note$key = {
  readonly " $data"?: NotePageOverviewTabFragment_note$data;
  readonly " $fragmentSpreads": FragmentRefs<"NotePageOverviewTabFragment_note">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NotePageOverviewTabFragment_note",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "note_id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "block_batch_index",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "block_note_index_in_batch",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "recipient",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "sender",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "note_type",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "note_tag",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "note_aux",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "nullifier",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "block_number",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "note_status",
      "storageKey": null
    }
  ],
  "type": "Note",
  "abstractKey": null
};

(node as any).hash = "98e45dc9a19d16fcf35d546be68b89ca";

export default node;
