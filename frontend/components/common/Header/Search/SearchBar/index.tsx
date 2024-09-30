import { Fragment } from "react";
import { useRouter } from "next/router";
import { Combobox, Dialog, Transition } from "@headlessui/react";

import { useDebouncedInput } from "libs/hooks";
import { SearchBarInput } from "./SearchBarInput";
import { SearchBarResultsDropdown } from "./SearchBarResultsDropdown";
import { useSearch } from "./hooks";

export function SearchBar({
  open,
  closeModal,
}: {
  open: boolean;
  closeModal: Function;
}) {
  const router = useRouter();
  const [filter, setFilter] = useDebouncedInput("", 300);
  const isValidFilter = filter.length !== 0;

  const {
    searchResults,
    loading: loading,
    error: error,
  } = useSearch({
    filter: filter,
    skip: !isValidFilter,
  });

  return (
    <Transition.Root show={open} as={Fragment} afterLeave={() => setFilter("")}>
      <Dialog
        as="div"
        className="fixed inset-0 z-20 overflow-y-auto p-4 sm:p-6 md:p-20"
        onClose={() => closeModal()}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-[50ms]"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 transition-opacity bg-zinc-400/25 backdrop-blur-sm dark:bg-black/40 opacity-100" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-75"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-[50ms]"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Combobox
            as="div"
            className="mx-auto max-w-3xl transform divide-y divide-gray-100 dark:divide-gray-600 overflow-hidden rounded-lg bg-white dark:bg-darkMuted shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
            value={null}
            onChange={(routeUrl: any) => {
              closeModal();
              router.push(routeUrl);
            }}
          >
            {({ activeOption }) => {
              return (
                <>
                  <div className="relative">
                    <SearchBarInput
                      filter={filter}
                      setFilter={setFilter}
                      loading={loading}
                      activeOption={activeOption}
                      closeModal={closeModal}
                    />
                  </div>
                  <SearchBarResultsDropdown
                    searchResults={searchResults}
                    isValidFilter={isValidFilter}
                    activeOption={activeOption}
                    loading={loading}
                    error={error}
                  />
                </>
              );
            }}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}
