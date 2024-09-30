/**
 * @generated SignedSource<<c0466b4360a9862c5665875ad81da0de>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type useHomePageStatsInfoFragment_overviewStats$data = {
  readonly total_count_account_updates: any;
  readonly total_count_accounts: any;
  readonly total_count_blocks: any;
  readonly total_count_notes: any;
  readonly total_count_nullifiers: any;
  readonly total_count_transactions: any;
  readonly " $fragmentType": "useHomePageStatsInfoFragment_overviewStats";
};
export type useHomePageStatsInfoFragment_overviewStats$key = {
  readonly " $data"?: useHomePageStatsInfoFragment_overviewStats$data;
  readonly " $fragmentSpreads": FragmentRefs<"useHomePageStatsInfoFragment_overviewStats">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useHomePageStatsInfoFragment_overviewStats",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "total_count_blocks",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "total_count_transactions",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "total_count_accounts",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "total_count_account_updates",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "total_count_notes",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "total_count_nullifiers",
      "storageKey": null
    }
  ],
  "type": "OverviewStats",
  "abstractKey": null
};

(node as any).hash = "69ca4b4dde424895e644b01ad8037574";

export default node;
