/**
 * @generated SignedSource<<14d19b7107379f08be09b05f3a6bc90e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NotesSortBy = "commited_at" | "%future added value";
export type OrderBy = "asc" | "desc" | "%future added value";
export type NotesInput = {
  block_hash?: string | null;
  order_by: OrderBy;
  sort_by: NotesSortBy;
};
export type NotesTablePaginationFragment$variables = {
  after?: string | null;
  first: number;
  input: NotesInput;
};
export type NotesTablePaginationFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"NotesTablePaginationFragment_notes">;
};
export type NotesTablePaginationFragment = {
  response: NotesTablePaginationFragment$data;
  variables: NotesTablePaginationFragment$variables;
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
    "name": "NotesTablePaginationFragment",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "NotesTablePaginationFragment_notes"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NotesTablePaginationFragment",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "NoteConnection",
        "kind": "LinkedField",
        "name": "notes",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "NoteEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Note",
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
                    "name": "note_id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "note_type",
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
        "args": (v1/*: any*/),
        "filters": [
          "input"
        ],
        "handle": "connection",
        "key": "NotesTablePaginationFragment_notes",
        "kind": "LinkedHandle",
        "name": "notes"
      }
    ]
  },
  "params": {
    "cacheID": "7a704f788f3224208dccf3573a05b536",
    "id": null,
    "metadata": {},
    "name": "NotesTablePaginationFragment",
    "operationKind": "query",
    "text": "query NotesTablePaginationFragment(\n  $after: String\n  $first: Int!\n  $input: NotesInput!\n) {\n  ...NotesTablePaginationFragment_notes_2DAjA4\n}\n\nfragment NotesTablePaginationFragment_notes_2DAjA4 on Query {\n  notes(first: $first, after: $after, input: $input) {\n    edges {\n      node {\n        id\n        ...NotesTableRowFragment_note\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment NotesTableRowFragment_note on Note {\n  id\n  note_id\n  note_type\n  block_number\n}\n"
  }
};
})();

(node as any).hash = "845067136be326378e1b41fae37bf078";

export default node;
