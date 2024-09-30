import { Combobox } from "@headlessui/react";

import { SearchBarResultCategoryItem } from "./SearchBarResultCategoryItem";
import { SearchResultsForCategory } from "../../SearchBar.utils";

export function SearchBarResultCategory({
  searchResultsForCategory,
}: {
  searchResultsForCategory: SearchResultsForCategory;
}) {
  return (
    <>
      <h2 className="mt-2 mb-2 text-xs font-semibold text-gray-500 dark:text-darkSecondary">
        {searchResultsForCategory.categoryName}
      </h2>
      <Combobox.Options
        static
        hold
        className="-mx-2 text-sm text-gray-700 dark:text-gray-100 mb-8"
      >
        {searchResultsForCategory.results.map((result) => {
          return (
            <SearchBarResultCategoryItem
              key={result.id}
              searchResultItem={result}
            />
          );
        })}
      </Combobox.Options>
    </>
  );
}
