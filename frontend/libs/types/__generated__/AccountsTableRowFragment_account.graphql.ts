/**
 * @generated SignedSource<<725083cb0d504d38132a1c41d458dbf8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AccountsTableRowFragment_account$data = {
  readonly account_id: string;
  readonly block_number: number;
  readonly id: string;
  readonly is_private: boolean;
  readonly " $fragmentType": "AccountsTableRowFragment_account";
};
export type AccountsTableRowFragment_account$key = {
  readonly " $data"?: AccountsTableRowFragment_account$data;
  readonly " $fragmentSpreads": FragmentRefs<"AccountsTableRowFragment_account">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AccountsTableRowFragment_account",
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
      "name": "account_id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "is_private",
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
  "type": "Account",
  "abstractKey": null
};

(node as any).hash = "431845f22577ffc5280816aa38bb7f61";

export default node;
