import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

import { useKeyPress, usePlatformType } from "libs/hooks";
import { SearchBar } from "./SearchBar";

export function Search() {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const platform = usePlatformType();

  useKeyPress("k", () => setIsSearchBarOpen(true));

  return (
    <>
      <button
        type="button"
        className="flex items-center w-[320px] min-w-max text-left space-x-3 px-4 h-9 bg-white dark:bg-violet-950 ring-1 ring-slate-900/10 dark:ring-blueLight shadow-sm rounded-full text-slate-400 dark:text-white focus:outline-none"
        onClick={(e: any) => setIsSearchBarOpen(true)}
      >
        <MagnifyingGlassIcon className="h-4 " />
        <span className="flex-auto font-bold text-sm">Search…</span>
        {(() => {
          if (platform?.toLowerCase().includes("windows")) {
            return (
              <kbd className="font-sans font-semibold ">
                <abbr
                  title="Control"
                  className="no-underline text-slate-300 dark:text-white"
                >
                  Ctrl{" "}
                </abbr>{" "}
                K
              </kbd>
            );
          } else if (platform?.toLowerCase().includes("mac")) {
            return (
              <kbd className="font-sans font-semibold">
                <abbr
                  title="Command"
                  className="no-underline text-slate-300 dark:text-white"
                >
                  ⌘
                </abbr>{" "}
                K
              </kbd>
            );
          }
          return <></>;
        })()}
      </button>
      <SearchBar
        open={isSearchBarOpen}
        closeModal={() => setIsSearchBarOpen(false)}
      />
    </>
  );
}
