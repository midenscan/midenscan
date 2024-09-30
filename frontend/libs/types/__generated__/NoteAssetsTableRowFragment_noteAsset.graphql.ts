/**
 * @generated SignedSource<<184cc5ddd8c96923e5c159472fa0d5af>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NoteAssetsTableRowFragment_noteAsset$data = {
  readonly amount: number;
  readonly faucet_id: string;
  readonly id: string;
  readonly note_id: string;
  readonly " $fragmentType": "NoteAssetsTableRowFragment_noteAsset";
};
export type NoteAssetsTableRowFragment_noteAsset$key = {
  readonly " $data"?: NoteAssetsTableRowFragment_noteAsset$data;
  readonly " $fragmentSpreads": FragmentRefs<"NoteAssetsTableRowFragment_noteAsset">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NoteAssetsTableRowFragment_noteAsset",
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
      "name": "faucet_id",
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
      "name": "amount",
      "storageKey": null
    }
  ],
  "type": "NoteAsset",
  "abstractKey": null
};

(node as any).hash = "674530e1c8c8e9a14a8751b9c902ebcf";

export default node;
