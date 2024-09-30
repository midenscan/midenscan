/**
 * @generated SignedSource<<14f601da6f966cf13ae8200f02497af4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AccountPageCodeTabFragment_account$data = {
  readonly code_procedure: ReadonlyArray<string> | null;
  readonly " $fragmentType": "AccountPageCodeTabFragment_account";
};
export type AccountPageCodeTabFragment_account$key = {
  readonly " $data"?: AccountPageCodeTabFragment_account$data;
  readonly " $fragmentSpreads": FragmentRefs<"AccountPageCodeTabFragment_account">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AccountPageCodeTabFragment_account",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "code_procedure",
      "storageKey": null
    }
  ],
  "type": "Account",
  "abstractKey": null
};

(node as any).hash = "848d293ffb25ec73aa4d6bb8116c544c";

export default node;
