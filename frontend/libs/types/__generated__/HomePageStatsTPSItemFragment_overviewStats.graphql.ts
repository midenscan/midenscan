/**
 * @generated SignedSource<<505ba88ce3bd95e891b9ef312292a297>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HomePageStatsTPSItemFragment_overviewStats$data = {
  readonly transactions_per_second: number;
  readonly " $fragmentType": "HomePageStatsTPSItemFragment_overviewStats";
};
export type HomePageStatsTPSItemFragment_overviewStats$key = {
  readonly " $data"?: HomePageStatsTPSItemFragment_overviewStats$data;
  readonly " $fragmentSpreads": FragmentRefs<"HomePageStatsTPSItemFragment_overviewStats">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HomePageStatsTPSItemFragment_overviewStats",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "transactions_per_second",
      "storageKey": null
    }
  ],
  "type": "OverviewStats",
  "abstractKey": null
};

(node as any).hash = "088dd405ea98d483412dc1d2ba442730";

export default node;
