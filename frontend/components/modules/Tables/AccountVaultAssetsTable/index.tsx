import { graphql, useLazyLoadQuery, usePaginationFragment } from "react-relay";

import { ErrorBoundaryWithFallback } from "components/modules/ErrorBoundaryWithFallback";

import { AccountVaultAssetsTableError } from "./AccountVaultAssetsTableError";
import { AccountVaultAssetsTableContainer } from "./AccountVaultAssetsTableContainer";
import { AccountVaultAssetsTableQuery } from "libs/types/__generated__/AccountVaultAssetsTableQuery.graphql";
import { DEFAULT_NUMBER_OF_ROWS } from "components/modules/Tables/Tables.constants";
import { AccountVaultAssetsTablePaginationFragment_accountVaultAssets$key } from "libs/types/__generated__/AccountVaultAssetsTablePaginationFragment_accountVaultAssets.graphql";
import { AccountVaultAssetsTableContainerSkeleton } from "./AccountVaultAssetsTableContainerSkeleton";
import { SsrSuspense } from "components/modules/SsrSuspense";

export const ACCOUNT_VAULT_ASSETS_TABLE_NUMBER_ROWS_PER =
  DEFAULT_NUMBER_OF_ROWS;
export const ACCOUNT_VAULT_ASSETS_TABLE_NUMBER_OF_COLUMNS = 3;

const AccountVaultAssetsTableQueryGRAPHQL = graphql`
  query AccountVaultAssetsTableQuery(
    $first: Int!
    $after: String
    $input: AccountVaultAssetsInput!
  ) {
    ...AccountVaultAssetsTablePaginationFragment_accountVaultAssets
      @arguments(first: $first, after: $after, input: $input)
  }
`;
const AccountVaultAssetsTablePaginationFragmentGRAPHQL = graphql`
  fragment AccountVaultAssetsTablePaginationFragment_accountVaultAssets on Query
  @refetchable(queryName: "AccountVaultAssetsTablePaginationFragment")
  @argumentDefinitions(
    first: { type: "Int!" }
    after: { type: "String" }
    input: { type: "AccountVaultAssetsInput!" }
  ) {
    accountVaultAssets(first: $first, after: $after, input: $input)
      @connection(
        key: "AccountVaultAssetsTablePaginationFragment_accountVaultAssets"
      ) {
      edges {
        node {
          id
          ...AccountVaultAssetsTableRowFragment_accountVaultAsset
        }
      }
    }
  }
`;
function AccountVaultAssetsTableInner({ account_id }: { account_id: string }) {
  const accountVaultAssetsTableData =
    useLazyLoadQuery<AccountVaultAssetsTableQuery>(
      AccountVaultAssetsTableQueryGRAPHQL,
      {
        first: ACCOUNT_VAULT_ASSETS_TABLE_NUMBER_ROWS_PER,
        input: {
          account_id: account_id,
        },
      }
    );
  const { data, isLoadingNext, loadNext, hasNext } = usePaginationFragment<
    AccountVaultAssetsTableQuery,
    AccountVaultAssetsTablePaginationFragment_accountVaultAssets$key
  >(
    AccountVaultAssetsTablePaginationFragmentGRAPHQL,
    accountVaultAssetsTableData
  );

  return (
    <AccountVaultAssetsTableContainer
      accountVaultAssetsData={data}
      isLoadingNext={isLoadingNext}
      loadNext={() => loadNext(ACCOUNT_VAULT_ASSETS_TABLE_NUMBER_ROWS_PER)}
      hasNext={hasNext}
    />
  );
}

export function AccountVaultAssetsTable({
  account_id,
}: {
  account_id: string;
}) {
  return (
    <ErrorBoundaryWithFallback
      renderFallbackComponent={(error: Error) => (
        <AccountVaultAssetsTableError error={error} />
      )}
    >
      <div className="flex flex-col gap-y-3">
        <SsrSuspense fallback={<AccountVaultAssetsTableContainerSkeleton />}>
          <AccountVaultAssetsTableInner account_id={account_id} />
        </SsrSuspense>
      </div>
    </ErrorBoundaryWithFallback>
  );
}
