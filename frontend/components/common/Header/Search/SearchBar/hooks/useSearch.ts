import { useSearchResults } from "./useSearchResults";
import { SearchResultsForCategory } from "../SearchBar.utils";

export function useSearch({
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
  const {
    searchResults,
    loading: loading,
    error: error,
  } = useSearchResults({
    filter: filter,
    skip: skip,
  });

  return {
    searchResults: searchResults,
    loading: loading,
    error: error,
  };
}
