import InfiniteScroll from "react-infinite-scroll-component";

import { OrderBy } from "libs/types";
import { NoTableRows } from "components/modules/Tables/NoTableRows";
import { EndMessage } from "components/modules/EndMessage";
import { NotesTableHeaders } from "./NotesTableHeaders";
import { NotesTableRow } from "./NotesTableRow";
import { NotesTableRowsSkeleton } from "./NotesTableRowsSkeleton";
import { NotesTablePaginationFragment_notes$data } from "libs/types/__generated__/NotesTablePaginationFragment_notes.graphql";
import { NOTES_TABLE_NUMBER_OF_COLUMNS } from ".";

export function NotesTableContainer({
  notesData,
  isLoadingNext,
  loadNext,
  hasNext,

  orderBy,
  setOrderBy,
}: {
  notesData: Nullable<NotesTablePaginationFragment_notes$data>;
  isLoadingNext: boolean;
  loadNext: () => any;
  hasNext: boolean;

  orderBy: OrderBy;
  setOrderBy: (orderBy: OrderBy) => void;
}) {
  const noteEdges = notesData?.notes?.edges;
  const dataLength = noteEdges ? noteEdges.length * 1000 : 0;
  const noTableRowsFounds =
    noteEdges && noteEdges.length === 0 && hasNext === false;
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
                <NotesTableHeaders orderBy={orderBy} setOrderBy={setOrderBy} />
                <tbody className="divide-y divide-gray-200 dark:divide-gray-600 bg-white dark:bg-darkMuted">
                  {noteEdges?.map((noteKey) => {
                    return (
                      <NotesTableRow
                        key={noteKey.node.id}
                        noteKey={noteKey.node}
                      />
                    );
                  })}
                  {isLoadingNext ? <NotesTableRowsSkeleton /> : null}
                  {noTableRowsFounds && (
                    <NoTableRows
                      colSpan={NOTES_TABLE_NUMBER_OF_COLUMNS}
                      message="No notes found"
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
