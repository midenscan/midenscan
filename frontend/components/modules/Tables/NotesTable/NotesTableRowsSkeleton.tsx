import {
  AddressSkeleton,
  AgeSkeleton,
  NumberSkeleton,
} from "components/modules/Skeletons";
import { NOTES_TABLE_NUMBER_ROWS_PER } from ".";

export function NotesTableRowsSkeleton() {
  return (
    <>
      {Array.from({ length: NOTES_TABLE_NUMBER_ROWS_PER }).map((_, index) => {
        return (
          <tr key={index}>
            <AddressSkeleton className="pl-3 sm:pl-6" />
            <NumberSkeleton />
          </tr>
        );
      })}
    </>
  );
}
