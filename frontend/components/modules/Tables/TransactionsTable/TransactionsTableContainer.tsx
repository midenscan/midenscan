import InfiniteScroll from "react-infinite-scroll-component";

import { OrderBy } from "libs/types";
import { NoTableRows } from "components/modules/Tables/NoTableRows";
import { EndMessage } from "components/modules/EndMessage";
import { TransactionsTableHeaders } from "./TransactionsTableHeaders";
import { TransactionsTableRow } from "./TransactionsTableRow";
import { TransactionsTableRowsSkeleton } from "./TransactionsTableRowsSkeleton";
import { TransactionsTablePaginationFragment_transactions$data } from "libs/types/__generated__/TransactionsTablePaginationFragment_transactions.graphql";
import { TRANSACTIONS_TABLE_NUMBER_OF_COLUMNS } from ".";

export function TransactionsTableContainer({
  transactionsData,
  isLoadingNext,
  loadNext,
  hasNext,

  orderBy,
  setOrderBy,
}: {
  transactionsData: Nullable<TransactionsTablePaginationFragment_transactions$data>;
  isLoadingNext: boolean;
  loadNext: () => any;
  hasNext: boolean;

  orderBy: OrderBy;
  setOrderBy: (orderBy: OrderBy) => void;
}) {
  const transactionEdges = transactionsData?.transactions?.edges;
  const dataLength = transactionEdges ? transactionEdges.length * 1000 : 0;
  const noTableRowsFounds =
    transactionEdges && transactionEdges.length === 0 && hasNext === false;
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
                <TransactionsTableHeaders
                  orderBy={orderBy}
                  setOrderBy={setOrderBy}
                />
                <tbody className="divide-y divide-gray-200 dark:divide-gray-600 bg-white dark:bg-darkMuted">
                  {transactionEdges?.map((transactionKey) => {
                    return (
                      <TransactionsTableRow
                        key={transactionKey.node.id}
                        transactionKey={transactionKey.node}
                      />
                    );
                  })}
                  {isLoadingNext ? <TransactionsTableRowsSkeleton /> : null}
                  {noTableRowsFounds && (
                    <NoTableRows
                      colSpan={TRANSACTIONS_TABLE_NUMBER_OF_COLUMNS}
                      message="No transactions found"
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
