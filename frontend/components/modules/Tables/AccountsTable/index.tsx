import { useState } from "react";
import { graphql, useLazyLoadQuery, usePaginationFragment } from "react-relay";

import { OrderBy } from "libs/types";
import { ErrorBoundaryWithFallback } from "components/modules/ErrorBoundaryWithFallback";

import { AccountsTableError } from "./AccountsTableError";
import { AccountsTableContainer } from "./AccountsTableContainer";
import { AccountsTableQuery } from "libs/types/__generated__/AccountsTableQuery.graphql";
import { DEFAULT_NUMBER_OF_ROWS } from "components/modules/Tables/Tables.constants";
import { AccountsTablePaginationFragment_accounts$key } from "libs/types/__generated__/AccountsTablePaginationFragment_accounts.graphql";
import { AccountsTableContainerSkeleton } from "./AccountsTableContainerSkeleton";
import { SsrSuspense } from "components/modules/SsrSuspense";

export const ACCOUNTS_TABLE_NUMBER_ROWS_PER = DEFAULT_NUMBER_OF_ROWS;
export const ACCOUNTS_TABLE_NUMBER_OF_COLUMNS = 3;

const AccountsTableQueryGRAPHQL = graphql`
  query AccountsTableQuery(
    $first: Int!
    $after: String
    $input: AccountsInput!
  ) {
    ...AccountsTablePaginationFragment_accounts
      @arguments(first: $first, after: $after, input: $input)
  }
`;
const AccountsTablePaginationFragmentGRAPHQL = graphql`
  fragment AccountsTablePaginationFragment_accounts on Query
  @refetchable(queryName: "AccountsTablePaginationFragment")
  @argumentDefinitions(
    first: { type: "Int!" }
    after: { type: "String" }
    input: { type: "AccountsInput!" }
  ) {
    accounts(first: $first, after: $after, input: $input)
      @connection(key: "AccountsTablePaginationFragment_accounts") {
      edges {
        node {
          id
          ...AccountsTableRowFragment_account
        }
      }
    }
  }
`;
function AccountsTableInner({
  orderBy,
  setOrderBy,
}: {
  orderBy: OrderBy;
  setOrderBy: (orderBy: OrderBy) => void;
}) {
  const accountsTableData = useLazyLoadQuery<AccountsTableQuery>(
    AccountsTableQueryGRAPHQL,
    {
      first: ACCOUNTS_TABLE_NUMBER_ROWS_PER,
      input: {
        sort_by: "timestamp",
        order_by: orderBy,
      },
    }
  );
  const { data, isLoadingNext, loadNext, hasNext } = usePaginationFragment<
    AccountsTableQuery,
    AccountsTablePaginationFragment_accounts$key
  >(AccountsTablePaginationFragmentGRAPHQL, accountsTableData);

  return (
    <AccountsTableContainer
      accountsData={data}
      isLoadingNext={isLoadingNext}
      loadNext={() => loadNext(ACCOUNTS_TABLE_NUMBER_ROWS_PER)}
      hasNext={hasNext}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
    />
  );
}

export function AccountsTable() {
  const [orderBy, setOrderBy] = useState<OrderBy>("desc");

  return (
    <ErrorBoundaryWithFallback
      renderFallbackComponent={(error: Error) => (
        <AccountsTableError error={error} />
      )}
    >
      <div className="flex flex-col gap-y-3">
        <SsrSuspense fallback={<AccountsTableContainerSkeleton />}>
          <AccountsTableInner orderBy={orderBy} setOrderBy={setOrderBy} />
        </SsrSuspense>
      </div>
    </ErrorBoundaryWithFallback>
  );
}
