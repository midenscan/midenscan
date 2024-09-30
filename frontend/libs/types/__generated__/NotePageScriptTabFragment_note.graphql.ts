/**
 * @generated SignedSource<<abf66b00a48f841864c9df3d6ece165d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NotePageScriptTabFragment_note$data = {
  readonly inputs: any | null;
  readonly script_code: string | null;
  readonly " $fragmentType": "NotePageScriptTabFragment_note";
};
export type NotePageScriptTabFragment_note$key = {
  readonly " $data"?: NotePageScriptTabFragment_note$data;
  readonly " $fragmentSpreads": FragmentRefs<"NotePageScriptTabFragment_note">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NotePageScriptTabFragment_note",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "script_code",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "inputs",
      "storageKey": null
    }
  ],
  "type": "Note",
  "abstractKey": null
};

(node as any).hash = "17323613ec97d0d3d1511eacb4ea497e";

export default node;
