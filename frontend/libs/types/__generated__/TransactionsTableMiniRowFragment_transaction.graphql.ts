/**
 * @generated SignedSource<<13931d0586d0373d92c74038cf101ea9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TransactionsTableMiniRowFragment_transaction$data = {
  readonly account_id: string;
  readonly block_number: number;
  readonly id: string;
  readonly transaction_id: string;
  readonly " $fragmentType": "TransactionsTableMiniRowFragment_transaction";
};
export type TransactionsTableMiniRowFragment_transaction$key = {
  readonly " $data"?: TransactionsTableMiniRowFragment_transaction$data;
  readonly " $fragmentSpreads": FragmentRefs<"TransactionsTableMiniRowFragment_transaction">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TransactionsTableMiniRowFragment_transaction",
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

(node as any).hash = "31e9bafa73044e6f99e1444492d0b27e";

export default node;
