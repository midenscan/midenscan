import { useState } from "react";
import { graphql, useLazyLoadQuery, usePaginationFragment } from "react-relay";

import { OrderBy } from "libs/types";
import { ErrorBoundaryWithFallback } from "components/modules/ErrorBoundaryWithFallback";

import { BlocksTableError } from "./BlocksTableError";
import { BlocksTableContainer } from "./BlocksTableContainer";
import { BlocksTableQuery } from "libs/types/__generated__/BlocksTableQuery.graphql";
import { DEFAULT_NUMBER_OF_ROWS } from "components/modules/Tables/Tables.constants";
import { BlocksTablePaginationFragment_blocks$key } from "libs/types/__generated__/BlocksTablePaginationFragment_blocks.graphql";
import { BlocksTableContainerSkeleton } from "./BlocksTableContainerSkeleton";
import { SsrSuspense } from "components/modules/SsrSuspense";

export const BLOCKS_TABLE_NUMBER_ROWS_PER = DEFAULT_NUMBER_OF_ROWS;
export const BLOCKS_TABLE_NUMBER_OF_COLUMNS = 3;

const BlocksTableQueryGRAPHQL = graphql`
  query BlocksTableQuery($first: Int!, $after: String, $input: BlocksInput!) {
    ...BlocksTablePaginationFragment_blocks
      @arguments(first: $first, after: $after, input: $input)
  }
`;
const BlocksTablePaginationFragmentGRAPHQL = graphql`
  fragment BlocksTablePaginationFragment_blocks on Query
  @refetchable(queryName: "BlocksTablePaginationFragment")
  @argumentDefinitions(
    first: { type: "Int!" }
    after: { type: "String" }
    input: { type: "BlocksInput!" }
  ) {
    blocks(first: $first, after: $after, input: $input)
      @connection(key: "BlocksTablePaginationFragment_blocks") {
      edges {
        node {
          id
          ...BlocksTableRowFragment_block
        }
      }
    }
  }
`;
function BlocksTableInner({
  orderBy,
  setOrderBy,
}: {
  orderBy: OrderBy;
  setOrderBy: (orderBy: OrderBy) => void;
}) {
  const blocksTableData = useLazyLoadQuery<BlocksTableQuery>(
    BlocksTableQueryGRAPHQL,
    {
      first: BLOCKS_TABLE_NUMBER_ROWS_PER,
      input: {
        sort_by: "timestamp",
        order_by: orderBy,
      },
    }
  );
  const { data, isLoadingNext, loadNext, hasNext } = usePaginationFragment<
    BlocksTableQuery,
    BlocksTablePaginationFragment_blocks$key
  >(BlocksTablePaginationFragmentGRAPHQL, blocksTableData);

  return (
    <BlocksTableContainer
      blocksData={data}
      isLoadingNext={isLoadingNext}
      loadNext={() => loadNext(BLOCKS_TABLE_NUMBER_ROWS_PER)}
      hasNext={hasNext}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
    />
  );
}

export function BlocksTable() {
  const [orderBy, setOrderBy] = useState<OrderBy>("desc");

  return (
    <ErrorBoundaryWithFallback
      renderFallbackComponent={(error: Error) => (
        <BlocksTableError error={error} />
      )}
    >
      <div className="flex flex-col gap-y-3">
        <SsrSuspense fallback={<BlocksTableContainerSkeleton />}>
          <BlocksTableInner orderBy={orderBy} setOrderBy={setOrderBy} />
        </SsrSuspense>
      </div>
    </ErrorBoundaryWithFallback>
  );
}
