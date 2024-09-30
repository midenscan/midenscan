import InfiniteScroll from "react-infinite-scroll-component";

import { NoTableRows } from "components/modules/Tables/NoTableRows";
import { EndMessage } from "components/modules/EndMessage";
import { AccountVaultAssetsTableHeaders } from "./AccountVaultAssetsTableHeaders";
import { AccountVaultAssetsTableRow } from "./AccountVaultAssetsTableRow";
import { AccountVaultAssetsTableRowsSkeleton } from "./AccountVaultAssetsTableRowsSkeleton";
import { AccountVaultAssetsTablePaginationFragment_accountVaultAssets$data } from "libs/types/__generated__/AccountVaultAssetsTablePaginationFragment_accountVaultAssets.graphql";
import { ACCOUNT_VAULT_ASSETS_TABLE_NUMBER_OF_COLUMNS } from ".";

export function AccountVaultAssetsTableContainer({
  accountVaultAssetsData,
  isLoadingNext,
  loadNext,
  hasNext,
}: {
  accountVaultAssetsData: Nullable<AccountVaultAssetsTablePaginationFragment_accountVaultAssets$data>;
  isLoadingNext: boolean;
  loadNext: () => any;
  hasNext: boolean;
}) {
  const accountVaultAssetsEdges =
    accountVaultAssetsData?.accountVaultAssets?.edges;
  const dataLength = accountVaultAssetsEdges
    ? accountVaultAssetsEdges.length * 1000
    : 0;
  const noTableRowsFounds =
    accountVaultAssetsEdges &&
    accountVaultAssetsEdges.length === 0 &&
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
                <AccountVaultAssetsTableHeaders />
                <tbody className="divide-y divide-gray-200 dark:divide-gray-600 bg-white dark:bg-darkMuted">
                  {accountVaultAssetsEdges?.map((accountVaultAssetKey) => {
                    return (
                      <AccountVaultAssetsTableRow
                        key={accountVaultAssetKey.node.id}
                        accountVaultAssetKey={accountVaultAssetKey.node}
                      />
                    );
                  })}
                  {isLoadingNext ? (
                    <AccountVaultAssetsTableRowsSkeleton />
                  ) : null}
                  {noTableRowsFounds && (
                    <NoTableRows
                      colSpan={ACCOUNT_VAULT_ASSETS_TABLE_NUMBER_OF_COLUMNS}
                      message="No vault assets found"
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
