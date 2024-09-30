/**
 * @generated SignedSource<<150143fd29157a51723cfca650fd2c9f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type MidenNoteType = "Encrypted" | "Private" | "Public" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type NotesTableRowFragment_note$data = {
  readonly block_number: number;
  readonly id: string;
  readonly note_id: string;
  readonly note_type: MidenNoteType;
  readonly " $fragmentType": "NotesTableRowFragment_note";
};
export type NotesTableRowFragment_note$key = {
  readonly " $data"?: NotesTableRowFragment_note$data;
  readonly " $fragmentSpreads": FragmentRefs<"NotesTableRowFragment_note">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NotesTableRowFragment_note",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
      "name": "note_type",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "block_number",
      "storageKey": null
    }
  ],
  "type": "Note",
  "abstractKey": null
};

(node as any).hash = "1221ad75fa56218b5b67c2c268ee017d";

export default node;
