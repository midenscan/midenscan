import {
  AddressSkeleton,
  AgeSkeleton,
  NumberSkeleton,
  NumTxsSkeleton,
} from "components/modules/Skeletons";
import { ACCOUNT_VAULT_ASSETS_TABLE_NUMBER_ROWS_PER } from ".";

export function AccountVaultAssetsTableRowsSkeleton() {
  return (
    <>
      {Array.from({ length: ACCOUNT_VAULT_ASSETS_TABLE_NUMBER_ROWS_PER }).map(
        (_, index) => {
          return (
            <tr key={index}>
              <AddressSkeleton className="pl-4 sm:pl-6" />
              <AddressSkeleton className="pl-2" />
              <AgeSkeleton />
            </tr>
          );
        }
      )}
    </>
  );
}
