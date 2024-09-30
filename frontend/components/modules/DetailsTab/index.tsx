export * from "./useDetailsTabState";
export * from "./DetailsTab.utils";

import { classNames } from "libs/styles";
import { TabMeta, TabOption } from "./DetailsTab.utils";

export function DetailsTabs({
  tabOptions,
  selectedTab,
  setSelectedTab,
}: {
  tabOptions: TabMeta[];
  selectedTab: TabOption;
  setSelectedTab: (tabOption: TabOption) => void;
}) {
  return (
    <div>
      {/* Mobile Tab selector */}
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md mb-8 dark:bg-gray-900 dark:border-gray-700"
          onChange={(event: any) => setSelectedTab(event.target.value)}
        >
          {tabOptions.map((tab) => {
            const isSelected = tab.option === selectedTab;

            return (
              <option
                selected={isSelected}
                value={tab.option}
                key={tab.displayName}
              >
                {tab.displayName}
              </option>
            );
          })}
        </select>
      </div>

      {/* Desktop Tab selector */}
      <div className="hidden sm:block">
        <div className="border-b border-gray-200 dark:border-gray-600">
          <nav className="-mb-px flex space-x-4" aria-label="Tabs">
            {tabOptions.map((tab) => {
              const isSelected = tab.option === selectedTab;
              return (
                <div
                  key={tab.displayName}
                  className={classNames(
                    isSelected
                      ? "border-primary text-primary dark:text-darkPrimary dark:border-darkPrimary"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-white dark:hover:text-darkPrimary dark:hover:border-darkPrimary",
                    "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer"
                  )}
                  aria-current={isSelected ? "page" : undefined}
                  onClick={() => setSelectedTab(tab.option)}
                >
                  {tab.displayName}
                  {tab.displayCount !== null ? (
                    <span
                      className={classNames(
                        isSelected
                          ? "bg-indigo-100 text-primary dark:bg-darkPrimary dark:text-white "
                          : "bg-gray-100 text-gray-900 dark:bg-darkPrimary dark:text-white",
                        "hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"
                      )}
                    >
                      {tab.displayCount}
                    </span>
                  ) : null}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
