/**
 * @generated SignedSource<<493050c7b94ef0b3492a8ef0a96c7303>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type useSearchResultsForAccountFragment_searchResult$data = {
  readonly account: {
    readonly account_id: string;
    readonly is_private: boolean;
  } | null;
  readonly " $fragmentType": "useSearchResultsForAccountFragment_searchResult";
};
export type useSearchResultsForAccountFragment_searchResult$key = {
  readonly " $data"?: useSearchResultsForAccountFragment_searchResult$data;
  readonly " $fragmentSpreads": FragmentRefs<"useSearchResultsForAccountFragment_searchResult">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useSearchResultsForAccountFragment_searchResult",
  "selections": [
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
          "name": "account_id",
          "storageKey": null
        },
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
  "type": "SearchResult",
  "abstractKey": null
};

(node as any).hash = "047e7ac74f7116cbec677b89f70bb5d7";

export default node;
