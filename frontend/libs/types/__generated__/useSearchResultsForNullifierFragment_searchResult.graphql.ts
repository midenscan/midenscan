/**
 * @generated SignedSource<<f32546b817e4cccb2b65501d84dc8b93>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type useSearchResultsForNullifierFragment_searchResult$data = {
  readonly nullifier: {
    readonly nullifier: string;
  } | null;
  readonly " $fragmentType": "useSearchResultsForNullifierFragment_searchResult";
};
export type useSearchResultsForNullifierFragment_searchResult$key = {
  readonly " $data"?: useSearchResultsForNullifierFragment_searchResult$data;
  readonly " $fragmentSpreads": FragmentRefs<"useSearchResultsForNullifierFragment_searchResult">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useSearchResultsForNullifierFragment_searchResult",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Nullifier",
      "kind": "LinkedField",
      "name": "nullifier",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "nullifier",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SearchResult",
  "abstractKey": null
};

(node as any).hash = "5631bc25b241ab7952e86d8d42d9e41a";

export default node;
