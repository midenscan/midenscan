/**
 * @generated SignedSource<<79d0f8a5f65bc87d51020829a9f13a41>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NoteAssetsInput = {
  note_id: string;
};
export type NoteAssetsTablePaginationFragment$variables = {
  after?: string | null;
  first: number;
  input: NoteAssetsInput;
};
export type NoteAssetsTablePaginationFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"NoteAssetsTablePaginationFragment_noteAssets">;
};
export type NoteAssetsTablePaginationFragment = {
  response: NoteAssetsTablePaginationFragment$data;
  variables: NoteAssetsTablePaginationFragment$variables;
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
    "name": "NoteAssetsTablePaginationFragment",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "NoteAssetsTablePaginationFragment_noteAssets"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NoteAssetsTablePaginationFragment",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "NoteAssetConnection",
        "kind": "LinkedField",
        "name": "noteAssets",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "NoteAssetEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "NoteAsset",
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
                    "name": "note_id",
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
        "key": "NoteAssetsTablePaginationFragment_noteAssets",
        "kind": "LinkedHandle",
        "name": "noteAssets"
      }
    ]
  },
  "params": {
    "cacheID": "fccd3dfd4faae4b75577f27d5283b9ab",
    "id": null,
    "metadata": {},
    "name": "NoteAssetsTablePaginationFragment",
    "operationKind": "query",
    "text": "query NoteAssetsTablePaginationFragment(\n  $after: String\n  $first: Int!\n  $input: NoteAssetsInput!\n) {\n  ...NoteAssetsTablePaginationFragment_noteAssets_2DAjA4\n}\n\nfragment NoteAssetsTablePaginationFragment_noteAssets_2DAjA4 on Query {\n  noteAssets(first: $first, after: $after, input: $input) {\n    edges {\n      node {\n        id\n        ...NoteAssetsTableRowFragment_noteAsset\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment NoteAssetsTableRowFragment_noteAsset on NoteAsset {\n  id\n  faucet_id\n  note_id\n  amount\n}\n"
  }
};
})();

(node as any).hash = "664ab8f12fb736416e6c5fea8133a46e";

export default node;
