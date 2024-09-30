/**
 * @generated SignedSource<<2dcfe0460ddb510c436f360717c314d9>>
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
export type AccountVaultAssetsTablePaginationFragment$variables = {
  after?: string | null;
  first: number;
  input: AccountVaultAssetsInput;
};
export type AccountVaultAssetsTablePaginationFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"AccountVaultAssetsTablePaginationFragment_accountVaultAssets">;
};
export type AccountVaultAssetsTablePaginationFragment = {
  response: AccountVaultAssetsTablePaginationFragment$data;
  variables: AccountVaultAssetsTablePaginationFragment$variables;
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
    "name": "AccountVaultAssetsTablePaginationFragment",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "AccountVaultAssetsTablePaginationFragment_accountVaultAssets"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AccountVaultAssetsTablePaginationFragment",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
        "args": (v1/*: any*/),
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
    "cacheID": "a4dd8eb4aef6b1e4bcfbfe1f0ea07851",
    "id": null,
    "metadata": {},
    "name": "AccountVaultAssetsTablePaginationFragment",
    "operationKind": "query",
    "text": "query AccountVaultAssetsTablePaginationFragment(\n  $after: String\n  $first: Int!\n  $input: AccountVaultAssetsInput!\n) {\n  ...AccountVaultAssetsTablePaginationFragment_accountVaultAssets_2DAjA4\n}\n\nfragment AccountVaultAssetsTablePaginationFragment_accountVaultAssets_2DAjA4 on Query {\n  accountVaultAssets(first: $first, after: $after, input: $input) {\n    edges {\n      node {\n        id\n        ...AccountVaultAssetsTableRowFragment_accountVaultAsset\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment AccountVaultAssetsTableRowFragment_accountVaultAsset on AccountVaultAsset {\n  id\n  faucet_id\n  account_id\n  amount\n}\n"
  }
};
})();

(node as any).hash = "afe97c24e15ca045899e74bd1e963f86";

export default node;
