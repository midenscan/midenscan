import { AddressSkeleton, AgeSkeleton } from "components/modules/Skeletons";
import { NOTE_ASSETS_TABLE_NUMBER_ROWS_PER } from ".";

export function NoteAssetsTableRowsSkeleton() {
  return (
    <>
      {Array.from({ length: NOTE_ASSETS_TABLE_NUMBER_ROWS_PER }).map(
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
