/**
 * @generated SignedSource<<49de6860570e110e056c8589f01f1d76>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AccountsSortBy = "timestamp" | "%future added value";
export type OrderBy = "asc" | "desc" | "%future added value";
export type AccountsInput = {
  order_by: OrderBy;
  sort_by: AccountsSortBy;
};
export type AccountsTableQuery$variables = {
  after?: string | null;
  first: number;
  input: AccountsInput;
};
export type AccountsTableQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"AccountsTablePaginationFragment_accounts">;
};
export type AccountsTableQuery = {
  response: AccountsTableQuery$data;
  variables: AccountsTableQuery$variables;
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
    "name": "AccountsTableQuery",
    "selections": [
      {
        "args": (v3/*: any*/),
        "kind": "FragmentSpread",
        "name": "AccountsTablePaginationFragment_accounts"
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
    "name": "AccountsTableQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "AccountConnection",
        "kind": "LinkedField",
        "name": "accounts",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "AccountEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Account",
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
                    "name": "account_id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "is_private",
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
        "key": "AccountsTablePaginationFragment_accounts",
        "kind": "LinkedHandle",
        "name": "accounts"
      }
    ]
  },
  "params": {
    "cacheID": "5cd642b598f94635820306f586264cf2",
    "id": null,
    "metadata": {},
    "name": "AccountsTableQuery",
    "operationKind": "query",
    "text": "query AccountsTableQuery(\n  $first: Int!\n  $after: String\n  $input: AccountsInput!\n) {\n  ...AccountsTablePaginationFragment_accounts_2DAjA4\n}\n\nfragment AccountsTablePaginationFragment_accounts_2DAjA4 on Query {\n  accounts(first: $first, after: $after, input: $input) {\n    edges {\n      node {\n        id\n        ...AccountsTableRowFragment_account\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment AccountsTableRowFragment_account on Account {\n  id\n  account_id\n  is_private\n  block_number\n}\n"
  }
};
})();

(node as any).hash = "7f3e4c5f85e24c1ad3c4befb15808a83";

export default node;
