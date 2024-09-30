import {
  AddressSkeleton,
  AgeSkeleton,
  NumberSkeleton,
} from "components/modules/Skeletons";
import { TRANSACTIONS_TABLE_NUMBER_ROWS_PER } from ".";

export function TransactionsTableRowsSkeleton() {
  return (
    <>
      {Array.from({ length: TRANSACTIONS_TABLE_NUMBER_ROWS_PER }).map(
        (_, index) => {
          return (
            <tr key={index}>
              <AddressSkeleton className="pl-3 sm:pl-6" />
              <AddressSkeleton className="sm:pl-2" />
              <NumberSkeleton />
            </tr>
          );
        }
      )}
    </>
  );
}
