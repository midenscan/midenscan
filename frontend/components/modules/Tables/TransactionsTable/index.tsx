import { useState } from "react";
import { graphql, useLazyLoadQuery, usePaginationFragment } from "react-relay";

import { OrderBy } from "libs/types";
import { ErrorBoundaryWithFallback } from "components/modules/ErrorBoundaryWithFallback";

import { TransactionsTableError } from "./TransactionsTableError";
import { TransactionsTableContainer } from "./TransactionsTableContainer";
import { TransactionsTableQuery } from "libs/types/__generated__/TransactionsTableQuery.graphql";
import { DEFAULT_NUMBER_OF_ROWS } from "components/modules/Tables/Tables.constants";
import { TransactionsTablePaginationFragment_transactions$key } from "libs/types/__generated__/TransactionsTablePaginationFragment_transactions.graphql";
import { TransactionsTableContainerSkeleton } from "./TransactionsTableContainerSkeleton";
import { SsrSuspense } from "components/modules/SsrSuspense";

export const TRANSACTIONS_TABLE_NUMBER_ROWS_PER = DEFAULT_NUMBER_OF_ROWS;
export const TRANSACTIONS_TABLE_NUMBER_OF_COLUMNS = 3;

const TransactionsTableQueryGRAPHQL = graphql`
  query TransactionsTableQuery(
    $first: Int!
    $after: String
    $input: TransactionsInput!
  ) {
    ...TransactionsTablePaginationFragment_transactions
      @arguments(first: $first, after: $after, input: $input)
  }
`;
const TransactionsTablePaginationFragmentGRAPHQL = graphql`
  fragment TransactionsTablePaginationFragment_transactions on Query
  @refetchable(queryName: "TransactionsTablePaginationFragment")
  @argumentDefinitions(
    first: { type: "Int!" }
    after: { type: "String" }
    input: { type: "TransactionsInput!" }
  ) {
    transactions(first: $first, after: $after, input: $input)
      @connection(key: "TransactionsTablePaginationFragment_transactions") {
      edges {
        node {
          id
          ...TransactionsTableRowFragment_transaction
        }
      }
    }
  }
`;
function TransactionsTableInner({
  block_hash,
  account_id,

  orderBy,
  setOrderBy,
}: {
  block_hash?: string;
  account_id?: string;

  orderBy: OrderBy;
  setOrderBy: (orderBy: OrderBy) => void;
}) {
  const transactionsTableData = useLazyLoadQuery<TransactionsTableQuery>(
    TransactionsTableQueryGRAPHQL,
    {
      first: TRANSACTIONS_TABLE_NUMBER_ROWS_PER,
      input: {
        block_hash: block_hash,
        account_id: account_id,
        sort_by: "commited_at",
        order_by: orderBy,
      },
    }
  );
  const { data, isLoadingNext, loadNext, hasNext } = usePaginationFragment<
    TransactionsTableQuery,
    TransactionsTablePaginationFragment_transactions$key
  >(TransactionsTablePaginationFragmentGRAPHQL, transactionsTableData);

  return (
    <TransactionsTableContainer
      transactionsData={data}
      isLoadingNext={isLoadingNext}
      loadNext={() => loadNext(TRANSACTIONS_TABLE_NUMBER_ROWS_PER)}
      hasNext={hasNext}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
    />
  );
}

export function TransactionsTable({
  block_hash,
  account_id,
}: {
  block_hash?: string;
  account_id?: string;
}) {
  const [orderBy, setOrderBy] = useState<OrderBy>("desc");

  return (
    <ErrorBoundaryWithFallback
      renderFallbackComponent={(error: Error) => (
        <TransactionsTableError error={error} />
      )}
    >
      <div className="flex flex-col gap-y-3">
        <SsrSuspense fallback={<TransactionsTableContainerSkeleton />}>
          <TransactionsTableInner
            block_hash={block_hash}
            account_id={account_id}
            orderBy={orderBy}
            setOrderBy={setOrderBy}
          />
        </SsrSuspense>
      </div>
    </ErrorBoundaryWithFallback>
  );
}
