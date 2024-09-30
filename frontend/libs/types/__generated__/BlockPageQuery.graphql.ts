/**
 * @generated SignedSource<<4aa79524c2dcab2e661c430d58cb6a64>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BlockInput = {
  block_identifier: string;
};
export type BlockPageQuery$variables = {
  input: BlockInput;
};
export type BlockPageQuery$data = {
  readonly block: {
    readonly block_hash: string;
    readonly number_of_account_updates: number;
    readonly number_of_notes: number;
    readonly number_of_transactions: number;
    readonly " $fragmentSpreads": FragmentRefs<"BlockPageOverviewTabFragment_block">;
  };
};
export type BlockPageQuery = {
  response: BlockPageQuery$data;
  variables: BlockPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "block_hash",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "number_of_account_updates",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "number_of_transactions",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "number_of_notes",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BlockPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Block",
        "kind": "LinkedField",
        "name": "block",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "BlockPageOverviewTabFragment_block"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BlockPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Block",
        "kind": "LinkedField",
        "name": "block",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9b81c4d2cf95238dacf036a0bd28338a",
    "id": null,
    "metadata": {},
    "name": "BlockPageQuery",
    "operationKind": "query",
    "text": "query BlockPageQuery(\n  $input: BlockInput!\n) {\n  block(input: $input) {\n    block_hash\n    number_of_account_updates\n    number_of_transactions\n    number_of_notes\n    ...BlockPageOverviewTabFragment_block\n    id\n  }\n}\n\nfragment BlockPageOverviewTabFragment_block on Block {\n  block_hash\n  block_number\n  timestamp\n  chain_root\n  account_root\n  nullifier_root\n  note_root\n  tx_hash\n  proof_hash\n}\n"
  }
};
})();

(node as any).hash = "87b7e1903ad2bcaa988445b01e55641e";

export default node;
