import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

import * as config from "libs/config";
import { classNames } from "libs/styles";
import { MidenNetworkType } from "libs/types";

type NetworkOption = {
  name: string;
  network: MidenNetworkType;
  midenscanURL: string;
};

// DEVNOTE: network options selectable from the dropdown
const NETWORK_OPTIONS_VISIBLE: NetworkOption[] = [
  {
    name: "Testnet",
    network: MidenNetworkType.TESTNET,
    midenscanURL: "https://testnet.midenscan.co",
  },
];

const NETWORK_OPTIONS_ALL = [...NETWORK_OPTIONS_VISIBLE];

export function NetworkSelect() {
  const currentNetwork =
    NETWORK_OPTIONS_ALL.find((networkOption) => {
      return networkOption.network === config.MIDEN_NETWORK;
    }) ??
    // DEVNOTE: we add default for typescript
    NETWORK_OPTIONS_VISIBLE[0];

  const [selected, setSelected] = useState(currentNetwork);

  return (
    <Listbox
      value={selected}
      onChange={(newNetworkOption) => {
        const newUrl = new URL(
          window.location.pathname,
          newNetworkOption.midenscanURL
        );
        window.location.replace(newUrl.href);
        setSelected(newNetworkOption);
      }}
    >
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button className="relative w-min-full w-28 cursor-pointer rounded-md border border-gray-300 dark:border-black bg-white dark:bg-darkMuted py-2 pl-3 pr-10 text-left shadow-sm sm:text-xs">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full w-min-fit overflow-auto rounded-md bg-white dark:bg-darkMuted py-1 text-base dark:text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {NETWORK_OPTIONS_VISIBLE.map((networkOption) => (
                  <Listbox.Option
                    key={networkOption.network}
                    className={({ active }) =>
                      classNames(
                        active
                          ? "text-white bg-primary dark:bg-darkPrimary"
                          : "text-gray-900 dark:text-white",
                        "relative select-none py-2 pl-3 pr-9 w-full w-min-fit cursor-pointer"
                      )
                    }
                    value={networkOption}
                  >
                    {({ selected, active }) => (
                      <div>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block w-full w-min-fit"
                          )}
                        >
                          {networkOption.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
