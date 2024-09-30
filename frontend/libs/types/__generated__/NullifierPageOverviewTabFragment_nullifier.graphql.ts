/**
 * @generated SignedSource<<0bd626e4b5d43e0594f04561497a55a2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NullifierPageOverviewTabFragment_nullifier$data = {
  readonly block_number: number;
  readonly note: {
    readonly note_id: string;
  } | null;
  readonly nullifier: string;
  readonly " $fragmentType": "NullifierPageOverviewTabFragment_nullifier";
};
export type NullifierPageOverviewTabFragment_nullifier$key = {
  readonly " $data"?: NullifierPageOverviewTabFragment_nullifier$data;
  readonly " $fragmentSpreads": FragmentRefs<"NullifierPageOverviewTabFragment_nullifier">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NullifierPageOverviewTabFragment_nullifier",
  "selections": [
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
      "concreteType": "Note",
      "kind": "LinkedField",
      "name": "note",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "note_id",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Nullifier",
  "abstractKey": null
};

(node as any).hash = "fec3530fdf93d5aa4072cb3bab481fc3";

export default node;
