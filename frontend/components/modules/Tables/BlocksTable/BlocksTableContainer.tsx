import InfiniteScroll from "react-infinite-scroll-component";

import { OrderBy } from "libs/types";
import { NoTableRows } from "components/modules/Tables/NoTableRows";
import { EndMessage } from "components/modules/EndMessage";
import { BlocksTableHeaders } from "./BlocksTableHeaders";
import { BlocksTableRow } from "./BlocksTableRow";
import { BlocksTableRowsSkeleton } from "./BlocksTableRowsSkeleton";
import { BlocksTablePaginationFragment_blocks$data } from "libs/types/__generated__/BlocksTablePaginationFragment_blocks.graphql";
import { BLOCKS_TABLE_NUMBER_OF_COLUMNS } from ".";

export function BlocksTableContainer({
  blocksData,
  isLoadingNext,
  loadNext,
  hasNext,

  orderBy,
  setOrderBy,
}: {
  blocksData: Nullable<BlocksTablePaginationFragment_blocks$data>;
  isLoadingNext: boolean;
  loadNext: () => any;
  hasNext: boolean;

  orderBy: OrderBy;
  setOrderBy: (orderBy: OrderBy) => void;
}) {
  const blockEdges = blocksData?.blocks?.edges;
  const dataLength = blockEdges ? blockEdges.length * 1000 : 0;
  const noTableRowsFounds =
    blockEdges && blockEdges.length === 0 && hasNext === false;
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
                <BlocksTableHeaders orderBy={orderBy} setOrderBy={setOrderBy} />
                <tbody className="divide-y divide-gray-200 dark:divide-gray-600 bg-white dark:bg-darkMuted">
                  {blockEdges?.map((blockKey) => {
                    return (
                      <BlocksTableRow
                        key={blockKey.node.id}
                        blockKey={blockKey.node}
                      />
                    );
                  })}
                  {isLoadingNext ? <BlocksTableRowsSkeleton /> : null}
                  {noTableRowsFounds && (
                    <NoTableRows
                      colSpan={BLOCKS_TABLE_NUMBER_OF_COLUMNS}
                      message="No blocks found"
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
