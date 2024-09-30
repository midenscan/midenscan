import { BlocksTableMiniQuery$data } from "libs/types/__generated__/BlocksTableMiniQuery.graphql";
import { BlocksTableMiniHeaders } from "./BlocksTableMiniHeaders";
import { BlocksTableMiniRow } from "./BlocksTableMiniRow";
import { BlocksTableMiniRowsSkeleton } from "./BlocksTableMiniRowsSkeleton";

export function BlocksTableMiniContainer({
  blocksData,
  isLoading,
}: {
  blocksData: Nullable<BlocksTableMiniQuery$data>;
  isLoading: boolean;
}) {
  const blockEdges = blocksData?.blocks?.edges;

  return (
    <div className="flex flex-col px-0.5 py-0.5">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
            <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-600">
              <BlocksTableMiniHeaders />
              <tbody className="divide-y divide-gray-200 dark:divide-gray-600 bg-white dark:bg-darkMuted">
                {blockEdges?.map((blockKey) => {
                  return (
                    <BlocksTableMiniRow
                      key={blockKey.node.id}
                      blockKey={blockKey.node}
                    />
                  );
                })}
                {isLoading ? <BlocksTableMiniRowsSkeleton /> : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
