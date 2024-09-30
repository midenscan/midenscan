/**
 * @generated SignedSource<<4ec6a6b280c53ca6dd2bcd4e51d584ae>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SearchInput = {
  filter: string;
};
export type useSearchResultsQuery$variables = {
  input: SearchInput;
};
export type useSearchResultsQuery$data = {
  readonly search: {
    readonly " $fragmentSpreads": FragmentRefs<"useSearchResultsForAccountFragment_searchResult" | "useSearchResultsForBlockFragment_searchResult" | "useSearchResultsForNoteFragment_searchResult" | "useSearchResultsForNullifierFragment_searchResult" | "useSearchResultsForTransactionFragment_searchResult">;
  };
};
export type useSearchResultsQuery = {
  response: useSearchResultsQuery$data;
  variables: useSearchResultsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "account_id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nullifier",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useSearchResultsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SearchResult",
        "kind": "LinkedField",
        "name": "search",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "useSearchResultsForBlockFragment_searchResult"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "useSearchResultsForTransactionFragment_searchResult"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "useSearchResultsForAccountFragment_searchResult"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "useSearchResultsForNoteFragment_searchResult"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "useSearchResultsForNullifierFragment_searchResult"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useSearchResultsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SearchResult",
        "kind": "LinkedField",
        "name": "search",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Block",
            "kind": "LinkedField",
            "name": "block",
            "plural": false,
            "selections": [
              (v2/*: any*/),
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
          },
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
              (v3/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Account",
            "kind": "LinkedField",
            "name": "account",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "is_private",
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          },
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
              (v4/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Nullifier",
            "kind": "LinkedField",
            "name": "nullifier",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a27fdc9c6046f7dca67c7d5630f7b9db",
    "id": null,
    "metadata": {},
    "name": "useSearchResultsQuery",
    "operationKind": "query",
    "text": "query useSearchResultsQuery(\n  $input: SearchInput!\n) {\n  search(input: $input) {\n    ...useSearchResultsForBlockFragment_searchResult\n    ...useSearchResultsForTransactionFragment_searchResult\n    ...useSearchResultsForAccountFragment_searchResult\n    ...useSearchResultsForNoteFragment_searchResult\n    ...useSearchResultsForNullifierFragment_searchResult\n  }\n}\n\nfragment useSearchResultsForAccountFragment_searchResult on SearchResult {\n  account {\n    account_id\n    is_private\n    id\n  }\n}\n\nfragment useSearchResultsForBlockFragment_searchResult on SearchResult {\n  block {\n    id\n    block_hash\n    block_number\n  }\n}\n\nfragment useSearchResultsForNoteFragment_searchResult on SearchResult {\n  note {\n    note_id\n    nullifier\n    id\n  }\n}\n\nfragment useSearchResultsForNullifierFragment_searchResult on SearchResult {\n  nullifier {\n    nullifier\n    id\n  }\n}\n\nfragment useSearchResultsForTransactionFragment_searchResult on SearchResult {\n  transaction {\n    transaction_id\n    account_id\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "6885d2f19264d4653fdb7a87179f8d32";

export default node;
