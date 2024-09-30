/**
 * @generated SignedSource<<7b0bd5f10b416d3953387d0a96e8269b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MidenNoteType = "Encrypted" | "Private" | "Public" | "%future added value";
export type NoteInput = {
  note_id: string;
};
export type NotePageQuery$variables = {
  input: NoteInput;
};
export type NotePageQuery$data = {
  readonly note: {
    readonly note_id: string;
    readonly note_type: MidenNoteType;
    readonly " $fragmentSpreads": FragmentRefs<"NotePageOverviewTabFragment_note" | "NotePageScriptTabFragment_note">;
  };
};
export type NotePageQuery = {
  response: NotePageQuery$data;
  variables: NotePageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
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
  "name": "note_id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "note_type",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NotePageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Note",
        "kind": "LinkedField",
        "name": "note",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "NotePageOverviewTabFragment_note"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "NotePageScriptTabFragment_note"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NotePageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Note",
        "kind": "LinkedField",
        "name": "note",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "block_batch_index",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "block_note_index_in_batch",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "recipient",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "sender",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "note_tag",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "note_aux",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "nullifier",
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
            "name": "note_status",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "script_code",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "inputs",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "cc9ca97fa0a427560e3cb35c8a7c281e",
    "id": null,
    "metadata": {},
    "name": "NotePageQuery",
    "operationKind": "query",
    "text": "query NotePageQuery(\n  $input: NoteInput!\n) {\n  note(input: $input) {\n    note_id\n    note_type\n    ...NotePageOverviewTabFragment_note\n    ...NotePageScriptTabFragment_note\n    id\n  }\n}\n\nfragment NotePageOverviewTabFragment_note on Note {\n  note_id\n  block_batch_index\n  block_note_index_in_batch\n  recipient\n  sender\n  note_type\n  note_tag\n  note_aux\n  nullifier\n  block_number\n  note_status\n}\n\nfragment NotePageScriptTabFragment_note on Note {\n  script_code\n  inputs\n}\n"
  }
};
})();

(node as any).hash = "502544dcf4ca78f4c0a440c081e8583b";

export default node;
