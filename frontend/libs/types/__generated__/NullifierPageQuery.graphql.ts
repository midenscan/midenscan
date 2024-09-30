/**
 * @generated SignedSource<<ae919bb430f8ccedede0ac75d489485f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NullifierInput = {
  nullifier: string;
};
export type NullifierPageQuery$variables = {
  input: NullifierInput;
};
export type NullifierPageQuery$data = {
  readonly nullifier: {
    readonly nullifier: string;
    readonly " $fragmentSpreads": FragmentRefs<"NullifierPageOverviewTabFragment_nullifier">;
  };
};
export type NullifierPageQuery = {
  response: NullifierPageQuery$data;
  variables: NullifierPageQuery$variables;
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
  "name": "nullifier",
  "storageKey": null
},
v3 = {
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
    "name": "NullifierPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Nullifier",
        "kind": "LinkedField",
        "name": "nullifier",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "NullifierPageOverviewTabFragment_nullifier"
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
    "name": "NullifierPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Nullifier",
        "kind": "LinkedField",
        "name": "nullifier",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
            "concreteType": "Note",
            "kind": "LinkedField",
            "name": "note",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "note_id",
                "storageKey": null
              },
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e2bb5945e1d92655238d2ea54a9b47f1",
    "id": null,
    "metadata": {},
    "name": "NullifierPageQuery",
    "operationKind": "query",
    "text": "query NullifierPageQuery(\n  $input: NullifierInput!\n) {\n  nullifier(input: $input) {\n    nullifier\n    ...NullifierPageOverviewTabFragment_nullifier\n    id\n  }\n}\n\nfragment NullifierPageOverviewTabFragment_nullifier on Nullifier {\n  nullifier\n  block_number\n  note {\n    note_id\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "0f50f3c188441ef56ebffd40e9fed8ea";

export default node;
