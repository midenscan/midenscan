import InfiniteScroll from "react-infinite-scroll-component";

import { NoTableRows } from "components/modules/Tables/NoTableRows";
import { EndMessage } from "components/modules/EndMessage";
import { NoteAssetsTableHeaders } from "./NoteAssetsTableHeaders";
import { NoteAssetsTableRow } from "./NoteAssetsTableRow";
import { NoteAssetsTableRowsSkeleton } from "./NoteAssetsTableRowsSkeleton";
import { NoteAssetsTablePaginationFragment_noteAssets$data } from "libs/types/__generated__/NoteAssetsTablePaginationFragment_noteAssets.graphql";
import { NOTE_ASSETS_TABLE_NUMBER_OF_COLUMNS } from ".";

export function NoteAssetsTableContainer({
  noteAssetsData,
  isLoadingNext,
  loadNext,
  hasNext,
}: {
  noteAssetsData: Nullable<NoteAssetsTablePaginationFragment_noteAssets$data>;
  isLoadingNext: boolean;
  loadNext: () => any;
  hasNext: boolean;
}) {
  const noteAssetsEdges = noteAssetsData?.noteAssets?.edges;
  const dataLength = noteAssetsEdges ? noteAssetsEdges.length * 1000 : 0;
  const noTableRowsFounds =
    noteAssetsEdges && noteAssetsEdges.length === 0 && hasNext === false;
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
                <NoteAssetsTableHeaders />
                <tbody className="divide-y divide-gray-200 dark:divide-gray-600 bg-white dark:bg-darkMuted">
                  {noteAssetsEdges?.map((noteAssetKey) => {
                    return (
                      <NoteAssetsTableRow
                        key={noteAssetKey.node.id}
                        noteAssetKey={noteAssetKey.node}
                      />
                    );
                  })}
                  {isLoadingNext ? <NoteAssetsTableRowsSkeleton /> : null}
                  {noTableRowsFounds && (
                    <NoTableRows
                      colSpan={NOTE_ASSETS_TABLE_NUMBER_OF_COLUMNS}
                      message="No assets found"
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
