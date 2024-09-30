import { ReactNode } from "react";
import { Square2StackIcon } from "@heroicons/react/24/outline";

import { CopyAddressTooltip } from "components/modules/Tooltip";
import { LinkRef } from "components/modules/LinkRef";
import { InfoTooltip } from "components/modules/Tooltip";

export function HashItem({
  title,
  titleTooltipMsg,
  displayValue,
  hash,
  href,
}: {
  title: string;
  titleTooltipMsg: string;
  // displayValue optional, defaults to hash
  displayValue?: string | ReactNode;
  hash: string;
  href?: string;
}) {
  const finalDisplayValue = displayValue ?? hash;

  return (
    <div className="bg-white dark:bg-darkMuted px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500 dark:text-white">
        <div className="flex items-center gap-x-1">
          <InfoTooltip message={titleTooltipMsg} />
          <div>{title}</div>
        </div>
      </dt>
      <dd className="flex items-center gap-x-3 mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2 font-mono">
        {href ? (
          <LinkRef
            href={href}
            className="text-blue-800 dark:text-blue-400 hover:underline"
          >
            {finalDisplayValue}
          </LinkRef>
        ) : (
          <div>{finalDisplayValue}</div>
        )}
        <CopyAddressTooltip address={hash} offsetOptions={{ offset: [0, 7] }}>
          <Square2StackIcon className="h-5 w-5 cursor-pointer" />
        </CopyAddressTooltip>
      </dd>
    </div>
  );
}
