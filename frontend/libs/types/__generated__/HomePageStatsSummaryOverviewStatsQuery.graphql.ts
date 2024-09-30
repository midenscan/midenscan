/**
 * @generated SignedSource<<7e7b1cf0fe355768918d86b766574d89>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HomePageStatsSummaryOverviewStatsQuery$variables = {};
export type HomePageStatsSummaryOverviewStatsQuery$data = {
  readonly overviewStats: {
    readonly " $fragmentSpreads": FragmentRefs<"HomePageStatsTPSItemFragment_overviewStats" | "useHomePageStatsInfoFragment_overviewStats">;
  };
};
export type HomePageStatsSummaryOverviewStatsQuery = {
  response: HomePageStatsSummaryOverviewStatsQuery$data;
  variables: HomePageStatsSummaryOverviewStatsQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomePageStatsSummaryOverviewStatsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "OverviewStats",
        "kind": "LinkedField",
        "name": "overviewStats",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "useHomePageStatsInfoFragment_overviewStats"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "HomePageStatsTPSItemFragment_overviewStats"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomePageStatsSummaryOverviewStatsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "OverviewStats",
        "kind": "LinkedField",
        "name": "overviewStats",
        "plural": false,
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "transactions_per_second",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d09016fca0d916e0062b88c61546df58",
    "id": null,
    "metadata": {},
    "name": "HomePageStatsSummaryOverviewStatsQuery",
    "operationKind": "query",
    "text": "query HomePageStatsSummaryOverviewStatsQuery {\n  overviewStats {\n    ...useHomePageStatsInfoFragment_overviewStats\n    ...HomePageStatsTPSItemFragment_overviewStats\n  }\n}\n\nfragment HomePageStatsTPSItemFragment_overviewStats on OverviewStats {\n  transactions_per_second\n}\n\nfragment useHomePageStatsInfoFragment_overviewStats on OverviewStats {\n  total_count_blocks\n  total_count_transactions\n  total_count_accounts\n  total_count_account_updates\n  total_count_notes\n  total_count_nullifiers\n}\n"
  }
};

(node as any).hash = "cf672af3d0fb32f669e6933bf8c0edf1";

export default node;
