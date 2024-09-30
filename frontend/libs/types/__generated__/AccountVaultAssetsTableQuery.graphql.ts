/**
 * @generated SignedSource<<6140407474730ebaea8c9f8556f36d8c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AccountVaultAssetsInput = {
  account_id: string;
};
export type AccountVaultAssetsTableQuery$variables = {
  after?: string | null;
  first: number;
  input: AccountVaultAssetsInput;
};
export type AccountVaultAssetsTableQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"AccountVaultAssetsTablePaginationFragment_accountVaultAssets">;
};
export type AccountVaultAssetsTableQuery = {
  response: AccountVaultAssetsTableQuery$data;
  variables: AccountVaultAssetsTableQuery$variables;
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
    "name": "AccountVaultAssetsTableQuery",
    "selections": [
      {
        "args": (v3/*: any*/),
        "kind": "FragmentSpread",
        "name": "AccountVaultAssetsTablePaginationFragment_accountVaultAssets"
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
    "name": "AccountVaultAssetsTableQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "AccountVaultAssetConnection",
        "kind": "LinkedField",
        "name": "accountVaultAssets",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "AccountVaultAssetEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "AccountVaultAsset",
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
                    "name": "faucet_id",
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
                    "name": "amount",
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
        "key": "AccountVaultAssetsTablePaginationFragment_accountVaultAssets",
        "kind": "LinkedHandle",
        "name": "accountVaultAssets"
      }
    ]
  },
  "params": {
    "cacheID": "722dcb164fa00dc3e7bc5bc847b5cdc9",
    "id": null,
    "metadata": {},
    "name": "AccountVaultAssetsTableQuery",
    "operationKind": "query",
    "text": "query AccountVaultAssetsTableQuery(\n  $first: Int!\n  $after: String\n  $input: AccountVaultAssetsInput!\n) {\n  ...AccountVaultAssetsTablePaginationFragment_accountVaultAssets_2DAjA4\n}\n\nfragment AccountVaultAssetsTablePaginationFragment_accountVaultAssets_2DAjA4 on Query {\n  accountVaultAssets(first: $first, after: $after, input: $input) {\n    edges {\n      node {\n        id\n        ...AccountVaultAssetsTableRowFragment_accountVaultAsset\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment AccountVaultAssetsTableRowFragment_accountVaultAsset on AccountVaultAsset {\n  id\n  faucet_id\n  account_id\n  amount\n}\n"
  }
};
})();

(node as any).hash = "516d5ca75bd0540ce4e4e827d28b076d";

export default node;
