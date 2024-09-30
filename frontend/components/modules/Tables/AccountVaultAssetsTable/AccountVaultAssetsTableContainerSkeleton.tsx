import { AccountVaultAssetsTableContainer } from "./AccountVaultAssetsTableContainer";

export function AccountVaultAssetsTableContainerSkeleton() {
  return (
    <AccountVaultAssetsTableContainer
      accountVaultAssetsData={null}
      isLoadingNext={true}
      loadNext={() => {}}
      hasNext={false}
    />
  );
}
