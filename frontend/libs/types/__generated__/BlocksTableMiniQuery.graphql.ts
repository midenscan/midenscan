/**
 * @generated SignedSource<<9073d446500a9057c0f97635bb14c906>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BlocksSortBy = "timestamp" | "%future added value";
export type OrderBy = "asc" | "desc" | "%future added value";
export type BlocksInput = {
  order_by: OrderBy;
  sort_by: BlocksSortBy;
};
export type BlocksTableMiniQuery$variables = {
  after?: string | null;
  first: number;
  input: BlocksInput;
};
export type BlocksTableMiniQuery$data = {
  readonly blocks: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"BlocksTableMiniRowFragment_block">;
      };
    }>;
  };
};
export type BlocksTableMiniQuery = {
  response: BlocksTableMiniQuery$data;
  variables: BlocksTableMiniQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "first"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v3 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "BlocksTableMiniQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "BlockConnection",
        "kind": "LinkedField",
        "name": "blocks",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "BlockEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Block",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "BlocksTableMiniRowFragment_block"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
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
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "BlocksTableMiniQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "BlockConnection",
        "kind": "LinkedField",
        "name": "blocks",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "BlockEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Block",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
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
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "322f42b29a6588ae99cf4fb25bbd31ce",
    "id": null,
    "metadata": {},
    "name": "BlocksTableMiniQuery",
    "operationKind": "query",
    "text": "query BlocksTableMiniQuery(\n  $first: Int!\n  $after: String\n  $input: BlocksInput!\n) {\n  blocks(first: $first, after: $after, input: $input) {\n    edges {\n      node {\n        id\n        ...BlocksTableMiniRowFragment_block\n      }\n    }\n  }\n}\n\nfragment BlocksTableMiniRowFragment_block on Block {\n  block_hash\n  block_number\n  timestamp\n}\n"
  }
};
})();

(node as any).hash = "750fd438d9a21c1c30c4bb7b7f04101c";

export default node;
