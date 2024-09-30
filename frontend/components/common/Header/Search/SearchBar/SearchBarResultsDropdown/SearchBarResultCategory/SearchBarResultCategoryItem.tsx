import { Combobox } from "@headlessui/react";
import { classNames } from "libs/styles";
import { SearchResultItem } from "../../SearchBar.utils";

export function SearchBarResultCategoryItem({
  searchResultItem,
}: {
  searchResultItem: SearchResultItem;
}) {
  return (
    <Combobox.Option
      key={searchResultItem.id}
      value={searchResultItem.routeUrl}
      className={({ active }) => {
        const activeClassNames = active
          ? "bg-gray-100 text-gray-900 dark:bg-darkBg dark:text-white group"
          : "";
        return classNames(
          "flex select-none items-center rounded-md p-2 cursor-pointer",
          activeClassNames
        );
      }}
    >
      {() => {
        return (
          <>
            <div
              className={
                "flex h-10 w-10 flex-none items-center justify-center rounded-lg"
              }
            >
              <searchResultItem.icon
                className="h-10 w-10 text-primary dark:text-darkPrimary dark:bg-gray-900 bg-gray-50 p-[5px] rounded-lg object-contain"
                aria-hidden="true"
              />
            </div>
            <div className="ml-4 flex-auto">
              {searchResultItem.headerComponent}
              {searchResultItem.footerComponent}
            </div>
          </>
        );
      }}
    </Combobox.Option>
  );
}
