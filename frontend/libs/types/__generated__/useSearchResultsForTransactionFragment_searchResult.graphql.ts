/**
 * @generated SignedSource<<97ace4838182e4641d469ac4846963a8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type useSearchResultsForTransactionFragment_searchResult$data = {
  readonly transaction: {
    readonly account_id: string;
    readonly transaction_id: string;
  } | null;
  readonly " $fragmentType": "useSearchResultsForTransactionFragment_searchResult";
};
export type useSearchResultsForTransactionFragment_searchResult$key = {
  readonly " $data"?: useSearchResultsForTransactionFragment_searchResult$data;
  readonly " $fragmentSpreads": FragmentRefs<"useSearchResultsForTransactionFragment_searchResult">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useSearchResultsForTransactionFragment_searchResult",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Transaction",
      "kind": "LinkedField",
      "name": "transaction",
      "plural": false,
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SearchResult",
  "abstractKey": null
};

(node as any).hash = "822c075f166fe409bd73264e0baecd05";

export default node;
