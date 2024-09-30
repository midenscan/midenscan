import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { BLOCKCHAIN_NAV_OPTIONS } from "./index";
import { Logo } from "./Logo";
import { LinkRef } from "components/modules/LinkRef";
import { NetworkSelect } from "components/modules/Network";
import { ThemeButton } from "components/modules/Theme/ThemeButton";

export function MobileHeader() {
  return (
    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50"
      >
        {({ close }) => (
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white dark:bg-black shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-darkBg dark:ring-opacity-100 dark:ring-2">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Logo />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white dark:bg-darkPrimary p-2 text-gray-400 dark:text-white hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav
                  className="grid grid-cols-1 gap-7"
                  onClick={() => {
                    close();
                  }}
                >
                  {BLOCKCHAIN_NAV_OPTIONS.map((option) => (
                    <LinkRef
                      key={option.name}
                      className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50 hover:dark:bg-darkBg"
                      href={option.href}
                      openNewTab={option.openNewTab}
                    >
                      <option.icon
                        className="h-6 w-6 flex-shrink-0 text-primary dark:text-darkPrimary"
                        aria-hidden="true"
                      />

                      <div className="ml-4 text-base font-medium text-gray-900 dark:text-darkSecondary">
                        {option.name}
                      </div>
                    </LinkRef>
                  ))}
                </nav>
                <div className="flex items-center mt-6 justify-between md:hidden gap-x-4">
                  <NetworkSelect />
                  <ThemeButton />
                </div>
              </div>
            </div>
          </div>
        )}
      </Popover.Panel>
    </Transition>
  );
}
