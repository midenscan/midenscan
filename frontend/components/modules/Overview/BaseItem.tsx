import { ReactNode } from "react";
import { LinkRef } from "components/modules/LinkRef";
import { InfoTooltip } from "components/modules/Tooltip";

export function BaseItem({
  title,
  titleTooltipMsg,
  displayValue,
  href,
}: {
  title: string;
  titleTooltipMsg: string;
  displayValue: string | ReactNode;
  href?: string;
}) {
  return (
    <div className="bg-white dark:bg-darkMuted px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500 dark:text-white">
        <div className="flex items-center gap-x-1">
          <InfoTooltip message={titleTooltipMsg} />
          <div>{title}</div>
        </div>
      </dt>
      <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
        {href ? (
          <LinkRef
            href={href}
            className="text-blue-800 dark:text-blue-400 hover:underline"
          >
            {displayValue}
          </LinkRef>
        ) : (
          <>{displayValue}</>
        )}
      </dd>
    </div>
  );
}
