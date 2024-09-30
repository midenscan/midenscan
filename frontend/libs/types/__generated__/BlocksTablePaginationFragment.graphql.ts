/**
 * @generated SignedSource<<4f43b900fded8d1140b7d12f12340265>>
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
export type BlocksTablePaginationFragment$variables = {
  after?: string | null;
  first: number;
  input: BlocksInput;
};
export type BlocksTablePaginationFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"BlocksTablePaginationFragment_blocks">;
};
export type BlocksTablePaginationFragment = {
  response: BlocksTablePaginationFragment$data;
  variables: BlocksTablePaginationFragment$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BlocksTablePaginationFragment",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "BlocksTablePaginationFragment_blocks"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BlocksTablePaginationFragment",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
        "args": (v1/*: any*/),
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
    "cacheID": "e6106dc44b59832f6d59a3dc66381cfb",
    "id": null,
    "metadata": {},
    "name": "BlocksTablePaginationFragment",
    "operationKind": "query",
    "text": "query BlocksTablePaginationFragment(\n  $after: String\n  $first: Int!\n  $input: BlocksInput!\n) {\n  ...BlocksTablePaginationFragment_blocks_2DAjA4\n}\n\nfragment BlocksTablePaginationFragment_blocks_2DAjA4 on Query {\n  blocks(first: $first, after: $after, input: $input) {\n    edges {\n      node {\n        id\n        ...BlocksTableRowFragment_block\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment BlocksTableRowFragment_block on Block {\n  id\n  block_hash\n  block_number\n  timestamp\n  number_of_transactions\n}\n"
  }
};
})();

(node as any).hash = "c2e213b7f4962ed49fb0756fb44fb542";

export default node;
