/**
 * @generated SignedSource<<36be4102e2a64c5c0a670eb6b1d38fe4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AccountInput = {
  account_id: string;
};
export type AccountPageQuery$variables = {
  input: AccountInput;
};
export type AccountPageQuery$data = {
  readonly account: {
    readonly account_id: string;
    readonly is_private: boolean;
    readonly " $fragmentSpreads": FragmentRefs<"AccountPageCodeTabFragment_account" | "AccountPageOverviewTabFragment_account">;
  };
};
export type AccountPageQuery = {
  response: AccountPageQuery$data;
  variables: AccountPageQuery$variables;
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
  "name": "account_id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "is_private",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "block_number",
  "storageKey": null
},
v5 = {
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
    "name": "AccountPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Account",
        "kind": "LinkedField",
        "name": "account",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AccountPageOverviewTabFragment_account"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AccountPageCodeTabFragment_account"
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
    "name": "AccountPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Account",
        "kind": "LinkedField",
        "name": "account",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "account_type",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "is_faucet",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "block_hash",
            "storageKey": null
          },
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "AccountUpdate",
            "kind": "LinkedField",
            "name": "latest_account_update",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "state_hash",
                "storageKey": null
              },
              (v4/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "code_procedure",
            "storageKey": null
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3d6ac70588db95eb018ae8ba0867a337",
    "id": null,
    "metadata": {},
    "name": "AccountPageQuery",
    "operationKind": "query",
    "text": "query AccountPageQuery(\n  $input: AccountInput!\n) {\n  account(input: $input) {\n    account_id\n    is_private\n    ...AccountPageOverviewTabFragment_account\n    ...AccountPageCodeTabFragment_account\n    id\n  }\n}\n\nfragment AccountPageCodeTabFragment_account on Account {\n  code_procedure\n}\n\nfragment AccountPageOverviewTabFragment_account on Account {\n  account_id\n  is_private\n  account_type\n  is_faucet\n  block_hash\n  block_number\n  latest_account_update {\n    state_hash\n    block_number\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "cc414dd31a4f8633e3ffc796923c4bfa";

export default node;
