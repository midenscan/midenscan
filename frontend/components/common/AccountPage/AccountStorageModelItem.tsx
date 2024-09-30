import { AccountStorageModelBadge } from "components/modules/Badges";
import { InfoTooltip } from "components/modules/Tooltip";
import * as tooltipMessages from "libs/tooltipMessages";

export type AccountStorageModelType = "Public" | "Private";
export function AccountStorageModelItem({
  accountStorageModelType,
}: {
  accountStorageModelType: AccountStorageModelType;
}) {
  return (
    <div className="bg-white dark:bg-darkMuted px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500 dark:text-white">
        <div className="flex items-center gap-x-1">
          <InfoTooltip message={tooltipMessages.ACCOUNT_STORAGE_MODE} />
          Storage Mode
        </div>
      </dt>
      <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
        <AccountStorageModelBadge
          accountStorageModelType={accountStorageModelType}
        />
      </dd>
    </div>
  );
}
