/**
 * @generated SignedSource<<dd42f0181bca9549585785aeb66cdbc6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BlocksTableMiniRowFragment_block$data = {
  readonly block_hash: string;
  readonly block_number: number;
  readonly timestamp: number;
  readonly " $fragmentType": "BlocksTableMiniRowFragment_block";
};
export type BlocksTableMiniRowFragment_block$key = {
  readonly " $data"?: BlocksTableMiniRowFragment_block$data;
  readonly " $fragmentSpreads": FragmentRefs<"BlocksTableMiniRowFragment_block">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BlocksTableMiniRowFragment_block",
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
    }
  ],
  "type": "Block",
  "abstractKey": null
};

(node as any).hash = "efde07cdfbbb0828548bd29a135c4917";

export default node;
