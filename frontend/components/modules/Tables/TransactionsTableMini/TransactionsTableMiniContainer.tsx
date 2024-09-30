import { TransactionsTableMiniQuery$data } from "libs/types/__generated__/TransactionsTableMiniQuery.graphql";
import { TransactionsTableMiniHeaders } from "./TransactionsTableMiniHeaders";
import { TransactionsTableMiniRow } from "./TransactionsTableMiniRow";
import { TransactionsTableMiniRowsSkeleton } from "./TransactionsTableMiniRowsSkeleton";

export function TransactionsTableMiniContainer({
  transactionsData,
  isLoading,
} : {
  transactionsData: Nullable<TransactionsTableMiniQuery$data>,
  isLoading: boolean
}) {
  const transactionEdges = transactionsData?.transactions?.edges

  return (
    <div className="flex flex-col px-0.5 py-0.5">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
            <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-600">
              <TransactionsTableMiniHeaders />
              <tbody
                className="divide-y divide-gray-200 dark:divide-gray-600 bg-white dark:bg-darkMuted"
              >
                {transactionEdges?.map(transactionKey => {
                  return (
                    <TransactionsTableMiniRow
                      key={transactionKey.node.id}
                      transactionKey={transactionKey.node}
                    />
                  )
                })}
                {isLoading ? (
                  <TransactionsTableMiniRowsSkeleton />
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
