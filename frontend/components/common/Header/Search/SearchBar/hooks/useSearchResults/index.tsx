import { graphql } from "react-relay";

import { useRelayQuery } from "libs/hooks";
import { useSearchResultsQuery } from "libs/types/__generated__/useSearchResultsQuery.graphql";
import { SearchResultsForCategory } from "../../SearchBar.utils";
import { useSearchResultsForBlock } from "./useSearchResultsForBlock";
import { useSearchResultsForTransaction } from "./useSearchResultsForTransaction";
import { useSearchResultsForAccount } from "./useSearchResultsForAccount";
import { useSearchResultsForNote } from "./useSearchResultsForNote";
import { useSearchResultsForNullifier } from "./useSearchResultsForNullifier";

const useSearchResultsQueryGRAPHQL = graphql`
  query useSearchResultsQuery($input: SearchInput!) {
    search(input: $input) {
      ...useSearchResultsForBlockFragment_searchResult
      ...useSearchResultsForTransactionFragment_searchResult
      ...useSearchResultsForAccountFragment_searchResult
      ...useSearchResultsForNoteFragment_searchResult
      ...useSearchResultsForNullifierFragment_searchResult
    }
  }
`;
export function useSearchResults({
  filter,
  skip,
}: {
  filter: string;
  skip: boolean;
}): {
  searchResults: SearchResultsForCategory[];
  loading: boolean;
  error: Nullable<Error>;
} {
  const searchResults: SearchResultsForCategory[] = [];
  const { data, loading, error } = useRelayQuery<useSearchResultsQuery>(
    useSearchResultsQueryGRAPHQL,
    {
      input: {
        filter: filter,
      },
    },
    {
      skip: skip,
    }
  );
  const searchData = data?.search ?? null;

  const blockSearchCategory = useSearchResultsForBlock({
    searchKey: searchData,
  });
  if (blockSearchCategory) {
    searchResults.push(blockSearchCategory);
  }
  const transactionSearchCategory = useSearchResultsForTransaction({
    searchKey: searchData,
  });
  if (transactionSearchCategory) {
    searchResults.push(transactionSearchCategory);
  }
  const accountSearchCategory = useSearchResultsForAccount({
    searchKey: searchData,
  });
  if (accountSearchCategory) {
    searchResults.push(accountSearchCategory);
  }
  const noteSearchCategory = useSearchResultsForNote({
    searchKey: searchData,
  });
  if (noteSearchCategory) {
    searchResults.push(noteSearchCategory);
  }
  const nullifierSearchCategory = useSearchResultsForNullifier({
    searchKey: searchData,
  });
  if (nullifierSearchCategory) {
    searchResults.push(nullifierSearchCategory);
  }

  return {
    searchResults: searchResults,
    loading: loading,
    error: error,
  };
}
