import { classNames } from "libs/styles";
import { TooltipWrapper } from "components/modules/Tooltip";

import * as tooltipMessages from "libs/tooltipMessages";
import { AccountStorageModelType } from "components/common/AccountPage/AccountStorageModelItem";

export function AccountStorageModelBadge({
  accountStorageModelType,
}: {
  accountStorageModelType: AccountStorageModelType;
}) {
  // DEVNOTE: we need the classNames here or else tailwind will not pick it up
  let transactionColorClassNames =
    "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100";
  let tooltipMessage = "";

  if (accountStorageModelType === "Public") {
    transactionColorClassNames =
      "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100";
    tooltipMessage = tooltipMessages.ACCOUNT_PUBLIC;
  } else if (accountStorageModelType === "Private") {
    transactionColorClassNames =
      "bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100";
    tooltipMessage = tooltipMessages.ACCOUNT_PRIVATE;
  }

  return (
    <span
      className={classNames(
        "inline-flex items-center rounded-md px-1.5 py-0.5 text-xs font-medium font-mono",
        transactionColorClassNames
      )}
    >
      <TooltipWrapper
        message={tooltipMessage}
        className="cursor-help"
        flipOptions={{ padding: -10 }}
      >
        {accountStorageModelType}
      </TooltipWrapper>
    </span>
  );
}
