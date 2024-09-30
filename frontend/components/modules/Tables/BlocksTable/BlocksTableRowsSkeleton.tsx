import {
  AddressSkeleton,
  AgeSkeleton,
  NumberSkeleton,
  NumTxsSkeleton,
} from "components/modules/Skeletons";
import { BLOCKS_TABLE_NUMBER_ROWS_PER } from ".";

export function BlocksTableRowsSkeleton() {
  return (
    <>
      {Array.from({ length: BLOCKS_TABLE_NUMBER_ROWS_PER }).map((_, index) => {
        return (
          <tr key={index}>
            <NumberSkeleton className="pl-3 sm:pl-6" />
            <AddressSkeleton className="pl-2" />
            <NumTxsSkeleton />
            <AgeSkeleton />
          </tr>
        );
      })}
    </>
  );
}
