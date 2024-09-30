/**
 * @generated SignedSource<<82d2338ffd165806e052b878ad1d54c0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type useSearchResultsForNoteFragment_searchResult$data = {
  readonly note: {
    readonly note_id: string;
    readonly nullifier: string | null;
  } | null;
  readonly " $fragmentType": "useSearchResultsForNoteFragment_searchResult";
};
export type useSearchResultsForNoteFragment_searchResult$key = {
  readonly " $data"?: useSearchResultsForNoteFragment_searchResult$data;
  readonly " $fragmentSpreads": FragmentRefs<"useSearchResultsForNoteFragment_searchResult">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useSearchResultsForNoteFragment_searchResult",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Note",
      "kind": "LinkedField",
      "name": "note",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "note_id",
          "storageKey": null
        },
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

(node as any).hash = "f62580786a29e6d170a0cfa282af2d13";

export default node;
