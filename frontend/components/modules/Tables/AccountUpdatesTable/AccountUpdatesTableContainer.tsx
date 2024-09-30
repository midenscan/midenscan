import InfiniteScroll from "react-infinite-scroll-component";

import { OrderBy } from "libs/types";
import { NoTableRows } from "components/modules/Tables/NoTableRows";
import { EndMessage } from "components/modules/EndMessage";
import { AccountUpdatesTableHeaders } from "./AccountUpdatesTableHeaders";
import { AccountUpdatesTableRow } from "./AccountUpdatesTableRow";
import { AccountUpdatesTableRowsSkeleton } from "./AccountUpdatesTableRowsSkeleton";
import { AccountUpdatesTablePaginationFragment_accountUpdates$data } from "libs/types/__generated__/AccountUpdatesTablePaginationFragment_accountUpdates.graphql";
import { ACCOUNT_UPDATES_TABLE_NUMBER_OF_COLUMNS } from ".";

export function AccountUpdatesTableContainer({
  accountUpdatesData,
  isLoadingNext,
  loadNext,
  hasNext,

  orderBy,
  setOrderBy,
}: {
  accountUpdatesData: Nullable<AccountUpdatesTablePaginationFragment_accountUpdates$data>;
  isLoadingNext: boolean;
  loadNext: () => any;
  hasNext: boolean;

  orderBy: OrderBy;
  setOrderBy: (orderBy: OrderBy) => void;
}) {
  const accountUpdatesEdges = accountUpdatesData?.accountUpdates?.edges;
  const dataLength = accountUpdatesEdges
    ? accountUpdatesEdges.length * 1000
    : 0;
  const noTableRowsFounds =
    accountUpdatesEdges &&
    accountUpdatesEdges.length === 0 &&
    hasNext === false;
  return (
    <InfiniteScroll
      dataLength={dataLength}
      next={loadNext}
      hasMore={hasNext}
      loader={<></>}
      endMessage={<EndMessage />}
      style={{ overflow: "hidden" }}
    >
      <div className="flex flex-col px-0.5 py-0.5">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
              <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-600">
                <AccountUpdatesTableHeaders
                  orderBy={orderBy}
                  setOrderBy={setOrderBy}
                />
                <tbody className="divide-y divide-gray-200 dark:divide-gray-600 bg-white dark:bg-darkMuted">
                  {accountUpdatesEdges?.map((accountUpdateKey) => {
                    return (
                      <AccountUpdatesTableRow
                        key={accountUpdateKey.node.id}
                        accountUpdatesKey={accountUpdateKey.node}
                      />
                    );
                  })}
                  {isLoadingNext ? <AccountUpdatesTableRowsSkeleton /> : null}
                  {noTableRowsFounds && (
                    <NoTableRows
                      colSpan={ACCOUNT_UPDATES_TABLE_NUMBER_OF_COLUMNS}
                      message="No account updates found"
                    />
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </InfiniteScroll>
  );
}
