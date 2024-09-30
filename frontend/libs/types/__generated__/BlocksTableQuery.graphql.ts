/**
 * @generated SignedSource<<3074de0975f7be2acc801b69e2c57bf3>>
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
export type BlocksTableQuery$variables = {
  after?: string | null;
  first: number;
  input: BlocksInput;
};
export type BlocksTableQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"BlocksTablePaginationFragment_blocks">;
};
export type BlocksTableQuery = {
  response: BlocksTableQuery$data;
  variables: BlocksTableQuery$variables;
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
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "BlocksTableQuery",
    "selections": [
      {
        "args": (v3/*: any*/),
        "kind": "FragmentSpread",
        "name": "BlocksTablePaginationFragment_blocks"
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
    "name": "BlocksTableQuery",
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
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v3/*: any*/),
        "filters": [
          "input"
        ],
        "handle": "connection",
        "key": "BlocksTablePaginationFragment_blocks",
        "kind": "LinkedHandle",
        "name": "blocks"
      }
    ]
  },
  "params": {
    "cacheID": "3f340e330ffdfd23b5dc344e2fc8d3b0",
    "id": null,
    "metadata": {},
    "name": "BlocksTableQuery",
    "operationKind": "query",
    "text": "query BlocksTableQuery(\n  $first: Int!\n  $after: String\n  $input: BlocksInput!\n) {\n  ...BlocksTablePaginationFragment_blocks_2DAjA4\n}\n\nfragment BlocksTablePaginationFragment_blocks_2DAjA4 on Query {\n  blocks(first: $first, after: $after, input: $input) {\n    edges {\n      node {\n        id\n        ...BlocksTableRowFragment_block\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment BlocksTableRowFragment_block on Block {\n  id\n  block_hash\n  block_number\n  timestamp\n  number_of_transactions\n}\n"
  }
};
})();

(node as any).hash = "0b20d305f6cc5251f937dee86d1daceb";

export default node;
