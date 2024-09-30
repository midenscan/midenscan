/**
 * @generated SignedSource<<6424ffd15cf807ef434b3c5a41a50142>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TransactionPageOverviewTabFragment_transaction$data = {
  readonly account_id: string;
  readonly block_number: number;
  readonly transaction_id: string;
  readonly " $fragmentType": "TransactionPageOverviewTabFragment_transaction";
};
export type TransactionPageOverviewTabFragment_transaction$key = {
  readonly " $data"?: TransactionPageOverviewTabFragment_transaction$data;
  readonly " $fragmentSpreads": FragmentRefs<"TransactionPageOverviewTabFragment_transaction">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TransactionPageOverviewTabFragment_transaction",
  "selections": [
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

(node as any).hash = "e02b070a45f41eef18c4b99dcda149ed";

export default node;
