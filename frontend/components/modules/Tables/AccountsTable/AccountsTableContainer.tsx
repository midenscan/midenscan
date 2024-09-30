import InfiniteScroll from "react-infinite-scroll-component";

import { OrderBy } from "libs/types";
import { NoTableRows } from "components/modules/Tables/NoTableRows";
import { EndMessage } from "components/modules/EndMessage";
import { AccountsTableHeaders } from "./AccountsTableHeaders";
import { AccountsTableRow } from "./AccountsTableRow";
import { AccountsTableRowsSkeleton } from "./AccountsTableRowsSkeleton";
import { AccountsTablePaginationFragment_accounts$data } from "libs/types/__generated__/AccountsTablePaginationFragment_accounts.graphql";
import { ACCOUNTS_TABLE_NUMBER_OF_COLUMNS } from ".";

export function AccountsTableContainer({
  accountsData,
  isLoadingNext,
  loadNext,
  hasNext,

  orderBy,
  setOrderBy,
}: {
  accountsData: Nullable<AccountsTablePaginationFragment_accounts$data>;
  isLoadingNext: boolean;
  loadNext: () => any;
  hasNext: boolean;

  orderBy: OrderBy;
  setOrderBy: (orderBy: OrderBy) => void;
}) {
  const accountsEdges = accountsData?.accounts?.edges;
  const dataLength = accountsEdges ? accountsEdges.length * 1000 : 0;
  const noTableRowsFounds =
    accountsEdges && accountsEdges.length === 0 && hasNext === false;
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
                <AccountsTableHeaders
                  orderBy={orderBy}
                  setOrderBy={setOrderBy}
                />
                <tbody className="divide-y divide-gray-200 dark:divide-gray-600 bg-white dark:bg-darkMuted">
                  {accountsEdges?.map((accountKey) => {
                    return (
                      <AccountsTableRow
                        key={accountKey.node.id}
                        accountsKey={accountKey.node}
                      />
                    );
                  })}
                  {isLoadingNext ? <AccountsTableRowsSkeleton /> : null}
                  {noTableRowsFounds && (
                    <NoTableRows
                      colSpan={ACCOUNTS_TABLE_NUMBER_OF_COLUMNS}
                      message="No Accounts found"
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
