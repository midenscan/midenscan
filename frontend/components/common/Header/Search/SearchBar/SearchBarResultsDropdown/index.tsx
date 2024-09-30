import { classNames } from "libs/styles";
import { SearchResultsForCategory } from "../SearchBar.utils";
import { SearchBarError } from "./SearchBarError";
import { SearchBarNotFound } from "./SearchBarNotFound";
import { SearchBarResultCategory } from "./SearchBarResultCategory";

export function SearchBarResultsDropdown({
  searchResults,
  isValidFilter,
  activeOption,
  loading,
  error,
}: {
  searchResults: SearchResultsForCategory[];
  isValidFilter: boolean;

  activeOption: any;
  loading: boolean;
  error: Nullable<Error>;
}) {
  if (loading) {
    // render nothing when loading, loading animations are in the search inputs
    return null;
  }
  if (error) {
    return <SearchBarError />;
  }

  const hasResults = searchResults.length > 0;
  if (!hasResults && isValidFilter) {
    return <SearchBarNotFound />;
  }

  if (hasResults && isValidFilter) {
    return (
      <div className="flex divide-x divide-gray-100 dark:divide-gray-600">
        <div
          className={classNames(
            "max-h-96 min-w-0 flex-auto scroll-py-4 overflow-y-auto px-6 py-4",
            activeOption && "sm:h-96"
          )}
        >
          {searchResults.map((searchResult) => {
            return (
              <SearchBarResultCategory
                key={searchResult.categoryName}
                searchResultsForCategory={searchResult}
              />
            );
          })}
        </div>
      </div>
    );
  }

  return null;
}
