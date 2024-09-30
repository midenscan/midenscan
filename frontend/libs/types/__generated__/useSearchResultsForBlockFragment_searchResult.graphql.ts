/**
 * @generated SignedSource<<5764bf2606142069d8f777c3aee79960>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type useSearchResultsForBlockFragment_searchResult$data = {
  readonly block: {
    readonly block_hash: string;
    readonly block_number: number;
    readonly id: string;
  } | null;
  readonly " $fragmentType": "useSearchResultsForBlockFragment_searchResult";
};
export type useSearchResultsForBlockFragment_searchResult$key = {
  readonly " $data"?: useSearchResultsForBlockFragment_searchResult$data;
  readonly " $fragmentSpreads": FragmentRefs<"useSearchResultsForBlockFragment_searchResult">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useSearchResultsForBlockFragment_searchResult",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Block",
      "kind": "LinkedField",
      "name": "block",
      "plural": false,
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
          "name": "block_hash",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "block_number",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SearchResult",
  "abstractKey": null
};

(node as any).hash = "58107081ee837604eb4d5e4e36f06274";

export default node;
