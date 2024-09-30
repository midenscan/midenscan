/**
 * @generated SignedSource<<90e87a54c115afd5b154acc7b686dc70>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type MidenAccountType = "FungibleFaucet" | "NonFungibleFaucet" | "RegularAccountImmutableCode" | "RegularAccountUpdatableCode" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type AccountPageOverviewTabFragment_account$data = {
  readonly account_id: string;
  readonly account_type: MidenAccountType | null;
  readonly block_hash: string;
  readonly block_number: number;
  readonly is_faucet: boolean | null;
  readonly is_private: boolean;
  readonly latest_account_update: {
    readonly block_number: number;
    readonly state_hash: string;
  };
  readonly " $fragmentType": "AccountPageOverviewTabFragment_account";
};
export type AccountPageOverviewTabFragment_account$key = {
  readonly " $data"?: AccountPageOverviewTabFragment_account$data;
  readonly " $fragmentSpreads": FragmentRefs<"AccountPageOverviewTabFragment_account">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "block_number",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AccountPageOverviewTabFragment_account",
  "selections": [
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
    (v0/*: any*/),
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
        (v0/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Account",
  "abstractKey": null
};
})();

(node as any).hash = "2092b9e25644e85e12542bdec82117a3";

export default node;
