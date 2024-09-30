/**
 * @generated SignedSource<<66ac2e8d350940634c26e1a24d06e175>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BlocksTableRowFragment_block$data = {
  readonly block_hash: string;
  readonly block_number: number;
  readonly id: string;
  readonly number_of_transactions: number;
  readonly timestamp: number;
  readonly " $fragmentType": "BlocksTableRowFragment_block";
};
export type BlocksTableRowFragment_block$key = {
  readonly " $data"?: BlocksTableRowFragment_block$data;
  readonly " $fragmentSpreads": FragmentRefs<"BlocksTableRowFragment_block">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BlocksTableRowFragment_block",
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
      "name": "number_of_transactions",
      "storageKey": null
    }
  ],
  "type": "Block",
  "abstractKey": null
};

(node as any).hash = "6f026bb8c4774e9ab39d28b7a16fa364";

export default node;
