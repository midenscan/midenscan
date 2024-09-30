/**
 * @generated SignedSource<<f6a2d952a49bfe31a47c3db1f34107e3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BlockPageOverviewTabFragment_block$data = {
  readonly account_root: string;
  readonly block_hash: string;
  readonly block_number: number;
  readonly chain_root: string;
  readonly note_root: string;
  readonly nullifier_root: string;
  readonly proof_hash: string;
  readonly timestamp: number;
  readonly tx_hash: string;
  readonly " $fragmentType": "BlockPageOverviewTabFragment_block";
};
export type BlockPageOverviewTabFragment_block$key = {
  readonly " $data"?: BlockPageOverviewTabFragment_block$data;
  readonly " $fragmentSpreads": FragmentRefs<"BlockPageOverviewTabFragment_block">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BlockPageOverviewTabFragment_block",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "block_hash",
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
      "name": "timestamp",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "chain_root",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "account_root",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "nullifier_root",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "note_root",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "tx_hash",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "proof_hash",
      "storageKey": null
    }
  ],
  "type": "Block",
  "abstractKey": null
};

(node as any).hash = "45be28d7c44dcd9327e05c049eeca468";

export default node;
