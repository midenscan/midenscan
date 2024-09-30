import {
  AddressSkeleton,
  AgeSkeleton,
  NumberSkeleton,
  SmallNumberSkeleton,
} from "components/modules/Skeletons";
import { ACCOUNT_UPDATES_TABLE_NUMBER_ROWS_PER } from ".";

export function AccountUpdatesTableRowsSkeleton() {
  return (
    <>
      {Array.from({ length: ACCOUNT_UPDATES_TABLE_NUMBER_ROWS_PER }).map(
        (_, index) => {
          return (
            <tr key={index}>
              <AddressSkeleton className="pl-3 sm:pl-6" />
              <AddressSkeleton className="pl-2" />
              <SmallNumberSkeleton />
              <NumberSkeleton />
            </tr>
          );
        }
      )}
    </>
  );
}
