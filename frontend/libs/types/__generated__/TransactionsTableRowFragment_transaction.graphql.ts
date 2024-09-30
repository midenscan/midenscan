/**
 * @generated SignedSource<<4d527ce6705c6578ee32af1cabae54d4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TransactionsTableRowFragment_transaction$data = {
  readonly account_id: string;
  readonly block_number: number;
  readonly id: string;
  readonly transaction_id: string;
  readonly " $fragmentType": "TransactionsTableRowFragment_transaction";
};
export type TransactionsTableRowFragment_transaction$key = {
  readonly " $data"?: TransactionsTableRowFragment_transaction$data;
  readonly " $fragmentSpreads": FragmentRefs<"TransactionsTableRowFragment_transaction">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TransactionsTableRowFragment_transaction",
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
      "name": "transaction_id",
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
      "name": "block_number",
      "storageKey": null
    }
  ],
  "type": "Transaction",
  "abstractKey": null
};

(node as any).hash = "a961a67172016218eb703326c0a83851";

export default node;
