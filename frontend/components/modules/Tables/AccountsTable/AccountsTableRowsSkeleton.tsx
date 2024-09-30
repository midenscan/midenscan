import {
  AddressSkeleton,
  AgeSkeleton,
  NumberSkeleton,
  SmallNumberSkeleton,
} from "components/modules/Skeletons";
import { ACCOUNTS_TABLE_NUMBER_ROWS_PER } from ".";

export function AccountsTableRowsSkeleton() {
  return (
    <>
      {Array.from({ length: ACCOUNTS_TABLE_NUMBER_ROWS_PER }).map(
        (_, index) => {
          return (
            <tr key={index}>
              <AddressSkeleton className="pl-3 sm:pl-6" />
              <NumberSkeleton />
              <NumberSkeleton />
            </tr>
          );
        }
      )}
    </>
  );
}
