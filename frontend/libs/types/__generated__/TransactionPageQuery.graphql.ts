/**
 * @generated SignedSource<<529063fc09dcd8ef838cfc2a0a00fe55>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TransactionInput = {
  transaction_id: string;
};
export type TransactionPageQuery$variables = {
  input: TransactionInput;
};
export type TransactionPageQuery$data = {
  readonly transaction: {
    readonly transaction_id: string;
    readonly " $fragmentSpreads": FragmentRefs<"TransactionPageOverviewTabFragment_transaction">;
  };
};
export type TransactionPageQuery = {
  response: TransactionPageQuery$data;
  variables: TransactionPageQuery$variables;
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
  "name": "transaction_id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TransactionPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Transaction",
        "kind": "LinkedField",
        "name": "transaction",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TransactionPageOverviewTabFragment_transaction"
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
    "name": "TransactionPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Transaction",
        "kind": "LinkedField",
        "name": "transaction",
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
            "name": "block_number",
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
    "cacheID": "3dee3bafd55e80c887e5f5d7683ae29b",
    "id": null,
    "metadata": {},
    "name": "TransactionPageQuery",
    "operationKind": "query",
    "text": "query TransactionPageQuery(\n  $input: TransactionInput!\n) {\n  transaction(input: $input) {\n    transaction_id\n    ...TransactionPageOverviewTabFragment_transaction\n    id\n  }\n}\n\nfragment TransactionPageOverviewTabFragment_transaction on Transaction {\n  transaction_id\n  account_id\n  block_number\n}\n"
  }
};
})();

(node as any).hash = "4c16b24ec18daf7bf527361259b59273";

export default node;
