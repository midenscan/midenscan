/**
 * @generated SignedSource<<de99df8a8829833811666e9d1b437678>>
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
export type NoteAssetsTableQuery$variables = {
  after?: string | null;
  first: number;
  input: NoteAssetsInput;
};
export type NoteAssetsTableQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"NoteAssetsTablePaginationFragment_noteAssets">;
};
export type NoteAssetsTableQuery = {
  response: NoteAssetsTableQuery$data;
  variables: NoteAssetsTableQuery$variables;
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
    "name": "NoteAssetsTableQuery",
    "selections": [
      {
        "args": (v3/*: any*/),
        "kind": "FragmentSpread",
        "name": "NoteAssetsTablePaginationFragment_noteAssets"
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
    "name": "NoteAssetsTableQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
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
        "args": (v3/*: any*/),
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
    "cacheID": "33fe98520c6670710e0a34560eb8289f",
    "id": null,
    "metadata": {},
    "name": "NoteAssetsTableQuery",
    "operationKind": "query",
    "text": "query NoteAssetsTableQuery(\n  $first: Int!\n  $after: String\n  $input: NoteAssetsInput!\n) {\n  ...NoteAssetsTablePaginationFragment_noteAssets_2DAjA4\n}\n\nfragment NoteAssetsTablePaginationFragment_noteAssets_2DAjA4 on Query {\n  noteAssets(first: $first, after: $after, input: $input) {\n    edges {\n      node {\n        id\n        ...NoteAssetsTableRowFragment_noteAsset\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment NoteAssetsTableRowFragment_noteAsset on NoteAsset {\n  id\n  faucet_id\n  note_id\n  amount\n}\n"
  }
};
})();

(node as any).hash = "bc17bedca984b11ca4523132c4904f88";

export default node;
