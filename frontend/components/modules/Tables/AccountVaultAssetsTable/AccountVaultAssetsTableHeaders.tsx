import { InfoTooltip } from "components/modules/Tooltip";
import * as tooltipMessages from "libs/tooltipMessages";

export function AccountVaultAssetsTableHeaders() {
  return (
    <thead className="bg-gray-50 dark:bg-darkMuted">
      <tr>
        <th
          scope="col"
          className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white sm:pl-6"
        >
          <div className="flex items-center gap-x-1">
            <div>Faucet ID</div>
            <InfoTooltip message={tooltipMessages.FAUCET_ID} />
          </div>
        </th>
        <th
          scope="col"
          className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
        >
          <div className="flex items-center gap-x-1">
            <div>Owner Account ID</div>
            <InfoTooltip message={tooltipMessages.OWNER_ACCOUNT_ID} />
          </div>
        </th>
        <th
          scope="col"
          className="whitespace-nowrap px-2 pt-4 py-3.5 text-left text-xs font-semibold text-gray-900 dark:text-white"
        >
          <div className="flex items-center gap-x-1">
            <div>Amount</div>
            <InfoTooltip message={tooltipMessages.AMOUNT} />
          </div>
        </th>
      </tr>
    </thead>
  );
}
