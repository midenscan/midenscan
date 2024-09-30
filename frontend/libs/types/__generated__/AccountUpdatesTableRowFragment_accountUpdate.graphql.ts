/**
 * @generated SignedSource<<520818264651d0d572f91c17f368c80e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AccountUpdatesTableRowFragment_accountUpdate$data = {
  readonly account: {
    readonly is_private: boolean;
  };
  readonly account_id: string;
  readonly block_number: number;
  readonly id: string;
  readonly nonce: number | null;
  readonly state_hash: string;
  readonly " $fragmentType": "AccountUpdatesTableRowFragment_accountUpdate";
};
export type AccountUpdatesTableRowFragment_accountUpdate$key = {
  readonly " $data"?: AccountUpdatesTableRowFragment_accountUpdate$data;
  readonly " $fragmentSpreads": FragmentRefs<"AccountUpdatesTableRowFragment_accountUpdate">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AccountUpdatesTableRowFragment_accountUpdate",
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
      "name": "state_hash",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "nonce",
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
      "concreteType": "Account",
      "kind": "LinkedField",
      "name": "account",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "is_private",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "AccountUpdate",
  "abstractKey": null
};

(node as any).hash = "2a7cc7797211c78176dc576e011935c9";

export default node;
