/**
 * @generated SignedSource<<47bccdfcb26263d538f1ffb87879f398>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AccountVaultAssetsTablePaginationFragment_accountVaultAssets$data = {
  readonly accountVaultAssets: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"AccountVaultAssetsTableRowFragment_accountVaultAsset">;
      };
    }>;
  };
  readonly " $fragmentType": "AccountVaultAssetsTablePaginationFragment_accountVaultAssets";
};
export type AccountVaultAssetsTablePaginationFragment_accountVaultAssets$key = {
  readonly " $data"?: AccountVaultAssetsTablePaginationFragment_accountVaultAssets$data;
  readonly " $fragmentSpreads": FragmentRefs<"AccountVaultAssetsTablePaginationFragment_accountVaultAssets">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "accountVaultAssets"
];
return {
  "argumentDefinitions": [
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
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": require('./AccountVaultAssetsTablePaginationFragment.graphql')
    }
  },
  "name": "AccountVaultAssetsTablePaginationFragment_accountVaultAssets",
  "selections": [
    {
      "alias": "accountVaultAssets",
      "args": [
        {
          "kind": "Variable",
          "name": "input",
          "variableName": "input"
        }
      ],
      "concreteType": "AccountVaultAssetConnection",
      "kind": "LinkedField",
      "name": "__AccountVaultAssetsTablePaginationFragment_accountVaultAssets_connection",
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
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "AccountVaultAssetsTableRowFragment_accountVaultAsset"
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
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "afe97c24e15ca045899e74bd1e963f86";

export default node;
