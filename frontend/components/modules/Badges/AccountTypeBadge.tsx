import { classNames } from "libs/styles";
import { TooltipWrapper } from "components/modules/Tooltip";
import { MidenAccountType } from "libs/types";

import * as tooltipMessages from "libs/tooltipMessages";

export function AccountTypeBadge({
  accountType,
}: {
  accountType: MidenAccountType;
}) {
  // DEVNOTE: we need the classNames here or else tailwind will not pick it up
  let transactionColorClassNames =
    "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100";
  let tooltipMessage = "";

  if (accountType === "FungibleFaucet") {
    transactionColorClassNames =
      "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100";
    tooltipMessage = tooltipMessages.FUNGIBLE_FAUCET;
  } else if (accountType === "NonFungibleFaucet") {
    transactionColorClassNames =
      "bg-amber-100 text-amber-800 dark:bg-amber-800 dark:text-amber-100";
    tooltipMessage = tooltipMessages.NON_FUNGIBLE_FAUCET;
  } else if (accountType === "RegularAccountImmutableCode") {
    transactionColorClassNames =
      "bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100";
    tooltipMessage = tooltipMessages.REGULAR_ACCOUNT_IMMUTABLE;
  } else if (accountType === "RegularAccountUpdatableCode") {
    transactionColorClassNames =
      "bg-lime-100 text-lime-800 dark:bg-lime-800 dark:text-lime-100";
    tooltipMessage = tooltipMessages.REGULAR_ACCOUNT_UPDATABLE;
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
        {accountType}
      </TooltipWrapper>
    </span>
  );
}
