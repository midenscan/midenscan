import { useRouter } from "next/router";
import { Combobox } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

import * as paths from "libs/paths";
import { isNullOrUndefined } from "libs/check";

export function SearchBarInput({
  filter,
  setFilter,
  loading,

  activeOption,
  closeModal,
}: {
  filter: string;
  setFilter: (filter: string) => void;
  loading: boolean;

  activeOption: any;
  closeModal: Function;
}) {
  const router = useRouter();

  return (
    <>
      {loading ? (
        <svg
          className="animate-spin pointer-events-none absolute top-3.5 left-4 h-[18px] w-[18px] text-primary dark:text-darkPrimary"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        <MagnifyingGlassIcon
          className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400 dark:text-white"
          aria-hidden="true"
        />
      )}
      <Combobox.Input
        autoComplete="off"
        className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-sm text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-800/75"
        placeholder="Search Blocks, Accounts, Transactions, Notes and Nullfiiers on Midenscan..."
        displayValue={() => filter}
        onChange={(event: any) => {
          event.preventDefault();
          setFilter(event.target.value);
        }}
        onKeyDown={(event: any) => {
          if (event.key === "Enter" && isNullOrUndefined(activeOption)) {
            // user pressed enter, try to forward and search
            closeModal();
            router.push(paths.search(event.target.value));
          }
        }}
        autoFocus
      />
      <div
        className="cursor-pointer py-1 px-1.5 rounded-lg bg-slate-200 dark:bg-slate-700 absolute top-3 right-3 text-xs font-bold text-gray-400 dark:text-gray-200"
        onClick={() => closeModal()}
      >
        ESC
      </div>
    </>
  );
}
