import {
  AddressSkeleton,
  AgeSkeleton,
  NumberSkeleton,
} from "components/modules/Skeletons";
import { BLOCKS_TABLE_MINI_NUMBER_ROWS_PER } from ".";

export function BlocksTableMiniRowsSkeleton() {
  return (
    <>
      {Array.from({ length: BLOCKS_TABLE_MINI_NUMBER_ROWS_PER }).map(
        (_, index) => {
          return (
            <tr key={index}>
              <NumberSkeleton />
              <AddressSkeleton />
              <AgeSkeleton />
            </tr>
          );
        }
      )}
    </>
  );
}
