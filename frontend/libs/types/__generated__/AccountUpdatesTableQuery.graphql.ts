/**
 * @generated SignedSource<<0f84e602bcdf36f7707a1bab26824b85>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AccountUpdatesSortBy = "commited_at" | "%future added value";
export type OrderBy = "asc" | "desc" | "%future added value";
export type AccountUpdatesInput = {
  block_hash?: string | null;
  order_by: OrderBy;
  sort_by: AccountUpdatesSortBy;
};
export type AccountUpdatesTableQuery$variables = {
  after?: string | null;
  first: number;
  input: AccountUpdatesInput;
};
export type AccountUpdatesTableQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"AccountUpdatesTablePaginationFragment_accountUpdates">;
};
export type AccountUpdatesTableQuery = {
  response: AccountUpdatesTableQuery$data;
  variables: AccountUpdatesTableQuery$variables;
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
    "name": "AccountUpdatesTableQuery",
    "selections": [
      {
        "args": (v3/*: any*/),
        "kind": "FragmentSpread",
        "name": "AccountUpdatesTablePaginationFragment_accountUpdates"
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
    "name": "AccountUpdatesTableQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "AccountUpdateConnection",
        "kind": "LinkedField",
        "name": "accountUpdates",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "AccountUpdateEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "AccountUpdate",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
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
                    "name": "state_hash",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "nonce",
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
                    "concreteType": "Account",
                    "kind": "LinkedField",
                    "name": "account",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "is_private",
                        "storageKey": null
                      },
                      (v4/*: any*/)
                    ],
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
        "key": "AccountUpdatesTablePaginationFragment_accountUpdates",
        "kind": "LinkedHandle",
        "name": "accountUpdates"
      }
    ]
  },
  "params": {
    "cacheID": "a4e523eba375c5d9c6ed8e755bc398ee",
    "id": null,
    "metadata": {},
    "name": "AccountUpdatesTableQuery",
    "operationKind": "query",
    "text": "query AccountUpdatesTableQuery(\n  $first: Int!\n  $after: String\n  $input: AccountUpdatesInput!\n) {\n  ...AccountUpdatesTablePaginationFragment_accountUpdates_2DAjA4\n}\n\nfragment AccountUpdatesTablePaginationFragment_accountUpdates_2DAjA4 on Query {\n  accountUpdates(first: $first, after: $after, input: $input) {\n    edges {\n      node {\n        id\n        ...AccountUpdatesTableRowFragment_accountUpdate\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment AccountUpdatesTableRowFragment_accountUpdate on AccountUpdate {\n  id\n  account_id\n  state_hash\n  nonce\n  block_number\n  account {\n    is_private\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "e9d0e085d58889206841718dc4dbaa4b";

export default node;
