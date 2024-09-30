import { useState } from "react";
import { graphql, useLazyLoadQuery, usePaginationFragment } from "react-relay";

import { OrderBy } from "libs/types";
import { ErrorBoundaryWithFallback } from "components/modules/ErrorBoundaryWithFallback";

import { AccountUpdatesTableError } from "./AccountUpdatesTableError";
import { AccountUpdatesTableContainer } from "./AccountUpdatesTableContainer";
import { AccountUpdatesTableQuery } from "libs/types/__generated__/AccountUpdatesTableQuery.graphql";
import { DEFAULT_NUMBER_OF_ROWS } from "components/modules/Tables/Tables.constants";
import { AccountUpdatesTablePaginationFragment_accountUpdates$key } from "libs/types/__generated__/AccountUpdatesTablePaginationFragment_accountUpdates.graphql";
import { AccountUpdatesTableContainerSkeleton } from "./AccountUpdatesTableContainerSkeleton";
import { SsrSuspense } from "components/modules/SsrSuspense";

export const ACCOUNT_UPDATES_TABLE_NUMBER_ROWS_PER = DEFAULT_NUMBER_OF_ROWS;
export const ACCOUNT_UPDATES_TABLE_NUMBER_OF_COLUMNS = 4;

const AccountUpdatesTableQueryGRAPHQL = graphql`
  query AccountUpdatesTableQuery(
    $first: Int!
    $after: String
    $input: AccountUpdatesInput!
  ) {
    ...AccountUpdatesTablePaginationFragment_accountUpdates
      @arguments(first: $first, after: $after, input: $input)
  }
`;
const AccountUpdatesTablePaginationFragmentGRAPHQL = graphql`
  fragment AccountUpdatesTablePaginationFragment_accountUpdates on Query
  @refetchable(queryName: "AccountUpdatesTablePaginationFragment")
  @argumentDefinitions(
    first: { type: "Int!" }
    after: { type: "String" }
    input: { type: "AccountUpdatesInput!" }
  ) {
    accountUpdates(first: $first, after: $after, input: $input)
      @connection(key: "AccountUpdatesTablePaginationFragment_accountUpdates") {
      edges {
        node {
          id
          ...AccountUpdatesTableRowFragment_accountUpdate
        }
      }
    }
  }
`;
function AccountUpdatesTableInner({
  block_hash,

  orderBy,
  setOrderBy,
}: {
  block_hash?: string;

  orderBy: OrderBy;
  setOrderBy: (orderBy: OrderBy) => void;
}) {
  const accountUpdatesTableData = useLazyLoadQuery<AccountUpdatesTableQuery>(
    AccountUpdatesTableQueryGRAPHQL,
    {
      first: ACCOUNT_UPDATES_TABLE_NUMBER_ROWS_PER,
      input: {
        block_hash: block_hash,
        sort_by: "commited_at",
        order_by: orderBy,
      },
    }
  );
  const { data, isLoadingNext, loadNext, hasNext } = usePaginationFragment<
    AccountUpdatesTableQuery,
    AccountUpdatesTablePaginationFragment_accountUpdates$key
  >(AccountUpdatesTablePaginationFragmentGRAPHQL, accountUpdatesTableData);

  return (
    <AccountUpdatesTableContainer
      accountUpdatesData={data}
      isLoadingNext={isLoadingNext}
      loadNext={() => loadNext(ACCOUNT_UPDATES_TABLE_NUMBER_ROWS_PER)}
      hasNext={hasNext}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
    />
  );
}

export function AccountUpdatesTable({ block_hash }: { block_hash?: string }) {
  const [orderBy, setOrderBy] = useState<OrderBy>("desc");

  return (
    <ErrorBoundaryWithFallback
      renderFallbackComponent={(error: Error) => (
        <AccountUpdatesTableError error={error} />
      )}
    >
      <div className="flex flex-col gap-y-3">
        <SsrSuspense fallback={<AccountUpdatesTableContainerSkeleton />}>
          <AccountUpdatesTableInner
            block_hash={block_hash}
            orderBy={orderBy}
            setOrderBy={setOrderBy}
          />
        </SsrSuspense>
      </div>
    </ErrorBoundaryWithFallback>
  );
}
