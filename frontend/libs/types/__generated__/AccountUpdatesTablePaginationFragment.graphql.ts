/**
 * @generated SignedSource<<e3d7b30260ad249ade69020bca23b124>>
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
export type AccountUpdatesTablePaginationFragment$variables = {
  after?: string | null;
  first: number;
  input: AccountUpdatesInput;
};
export type AccountUpdatesTablePaginationFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"AccountUpdatesTablePaginationFragment_accountUpdates">;
};
export type AccountUpdatesTablePaginationFragment = {
  response: AccountUpdatesTablePaginationFragment$data;
  variables: AccountUpdatesTablePaginationFragment$variables;
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
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AccountUpdatesTablePaginationFragment",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "AccountUpdatesTablePaginationFragment_accountUpdates"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AccountUpdatesTablePaginationFragment",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
                  (v2/*: any*/),
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
                      (v2/*: any*/)
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
        "args": (v1/*: any*/),
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
    "cacheID": "6ebea24dd9903c34c9e1339467699e56",
    "id": null,
    "metadata": {},
    "name": "AccountUpdatesTablePaginationFragment",
    "operationKind": "query",
    "text": "query AccountUpdatesTablePaginationFragment(\n  $after: String\n  $first: Int!\n  $input: AccountUpdatesInput!\n) {\n  ...AccountUpdatesTablePaginationFragment_accountUpdates_2DAjA4\n}\n\nfragment AccountUpdatesTablePaginationFragment_accountUpdates_2DAjA4 on Query {\n  accountUpdates(first: $first, after: $after, input: $input) {\n    edges {\n      node {\n        id\n        ...AccountUpdatesTableRowFragment_accountUpdate\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment AccountUpdatesTableRowFragment_accountUpdate on AccountUpdate {\n  id\n  account_id\n  state_hash\n  nonce\n  block_number\n  account {\n    is_private\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "b07444d51fcea5dac3e089072f6e3477";

export default node;
