import { InfoTooltip } from "components/modules/Tooltip";
import { OrderByDirectionChevron } from "components/modules/Tables/Filters";
import { OrderBy } from "libs/types";
import * as tooltipMessages from "libs/tooltipMessages";

export function AccountsTableHeaders({
  orderBy,
  setOrderBy,
}: {
  orderBy: OrderBy;
  setOrderBy: (orderBy: OrderBy) => void;
}) {
  return (
    <thead className="bg-gray-50 dark:bg-darkMuted">
      <tr>
        <th
          scope="col"
          className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white sm:pl-6"
        >
          <div className="flex items-center gap-x-1">
            <div>Account ID</div>
            <InfoTooltip message={tooltipMessages.ACCOUNT_ID} />
          </div>
        </th>
        <th
          scope="col"
          className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
        >
          <div className="flex items-center gap-x-1">
            <div>Storage Mode</div>
            <InfoTooltip message={tooltipMessages.ACCOUNT_STORAGE_MODE} />
          </div>
        </th>
        <th
          scope="col"
          className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
        >
          <div className="flex items-center gap-x-1">
            <div>Created Block Number</div>
            <InfoTooltip message={tooltipMessages.CREATED_BLOCK_NUMBER} />
            <OrderByDirectionChevron
              orderBy={orderBy}
              setOrderBy={setOrderBy}
            />
          </div>
        </th>
      </tr>
    </thead>
  );
}
