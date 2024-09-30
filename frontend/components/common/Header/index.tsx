import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  CubeIcon,
  Bars3Icon,
  DocumentIcon,
  UserPlusIcon,
  UsersIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import * as paths from "libs/paths";
import { classNames } from "libs/styles";
import { ThemeButton } from "components/modules/Theme/ThemeButton";
import { NetworkSelect } from "components/modules/Network";
import { LinkRef } from "components/modules/LinkRef";
import { MobileHeader } from "./MobileHeader";
import { Logo } from "./Logo";
import { Search } from "./Search";

type NavOption = {
  name: string;
  description: string;
  icon: any;
  href: string;
  openNewTab: boolean;
};

export const BLOCKCHAIN_NAV_OPTIONS: NavOption[] = [
  {
    name: "Blocks",
    description: "Blocks of data on the blockchain.",
    icon: CubeIcon,
    href: paths.blocks,
    openNewTab: false,
  },
  {
    name: "Accounts",
    description: "Accounts on the blockchain.",
    icon: UsersIcon,
    href: paths.accounts,
    openNewTab: false,
  },
  {
    name: "Account Updates",
    description: "Account state updates.",
    icon: UserPlusIcon,
    href: paths.account_updates,
    openNewTab: false,
  },
  {
    name: "Transactions",
    description: "Transactions on the blockchain.",
    icon: ClipboardDocumentCheckIcon,
    href: paths.transactions,
    openNewTab: false,
  },
  {
    name: "Notes",
    description: "Notes on the blockchain.",
    icon: DocumentIcon,
    href: paths.notes,
    openNewTab: false,
  },
];

export function Header() {
  const [isShowingBlockchainNav, setIsShowingBlockchainNav] = useState(false);

  return (
    <Popover className="relative bg-[#f6f5f5] dark:bg-darkBg">
      <div className="flex flex-wrap items-center justify-between py-6 gap-y-8 md:gap-x-6 max-w-7xl mx-auto px-4 sm:px-6">
        <Logo />
        <Search />
        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white dark:bg-darkPrimary p-2 text-gray-400 dark:text-white hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden gap-x-5 md:flex">
          <Popover
            className="relative"
            onMouseEnter={() => setIsShowingBlockchainNav(true)}
            onMouseLeave={() => setIsShowingBlockchainNav(false)}
          >
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    isShowingBlockchainNav
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-500 dark:text-gray-300",
                    "group inline-flex items-center rounded-md bg-transparent text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-0"
                  )}
                >
                  <span>Blockchain</span>
                  <ChevronDownIcon
                    className={classNames(
                      isShowingBlockchainNav
                        ? "text-gray-600 dark:text-white rotate-180 transition ease-in-out duration-150"
                        : "text-gray-400 dark:text-gray-400 rotate-360 transition ease-in-out duration-150",
                      "ml-1 h-5 w-5 group-hover:text-gray-500 dark:group-hover:text-white"
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>
                <Transition
                  show={isShowingBlockchainNav}
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute left-1/2 z-20 pt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-darkBg dark:ring-opacity-100 dark:ring-2">
                      <div className="relative grid gap-6 bg-white dark:bg-darkMuted px-5 py-6 sm:gap-8 sm:p-8">
                        {BLOCKCHAIN_NAV_OPTIONS.map((option) => (
                          <LinkRef
                            key={option.name}
                            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50 hover:dark:bg-darkBg"
                            href={option.href}
                            openNewTab={option.openNewTab}
                          >
                            <option.icon
                              className="h-6 w-6 flex-shrink-0 text-primary dark:text-darkPrimary"
                              aria-hidden="true"
                            />
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900 dark:text-darkSecondary">
                                {option.name}
                              </p>
                              <p className="mt-1 text-sm text-gray-500 dark:text-white">
                                {option.description}
                              </p>
                            </div>
                          </LinkRef>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </Popover.Group>
        <div className="hidden items-center justify-end md:flex gap-x-2">
          <NetworkSelect />
          <ThemeButton />
        </div>
      </div>

      <MobileHeader />
    </Popover>
  );
}
