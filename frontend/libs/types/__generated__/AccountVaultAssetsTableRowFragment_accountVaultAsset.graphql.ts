/**
 * @generated SignedSource<<13c76d0ea404d01010a60f6a4721bc04>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AccountVaultAssetsTableRowFragment_accountVaultAsset$data = {
  readonly account_id: string;
  readonly amount: number;
  readonly faucet_id: string;
  readonly id: string;
  readonly " $fragmentType": "AccountVaultAssetsTableRowFragment_accountVaultAsset";
};
export type AccountVaultAssetsTableRowFragment_accountVaultAsset$key = {
  readonly " $data"?: AccountVaultAssetsTableRowFragment_accountVaultAsset$data;
  readonly " $fragmentSpreads": FragmentRefs<"AccountVaultAssetsTableRowFragment_accountVaultAsset">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AccountVaultAssetsTableRowFragment_accountVaultAsset",
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
      "name": "faucet_id",
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
      "name": "amount",
      "storageKey": null
    }
  ],
  "type": "AccountVaultAsset",
  "abstractKey": null
};

(node as any).hash = "f5228a53fb20dc42c3d73a42387256f5";

export default node;
