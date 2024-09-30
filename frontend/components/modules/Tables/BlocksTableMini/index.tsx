import { graphql, useLazyLoadQuery } from "react-relay";

import { ErrorBoundaryWithFallback } from "components/modules/ErrorBoundaryWithFallback";
import { SsrSuspense } from "components/modules/SsrSuspense";
import { BlocksTableMiniQuery } from "libs/types/__generated__/BlocksTableMiniQuery.graphql";
import { BlocksTableMiniContainer } from "./BlocksTableMiniContainer";
import { BlocksTableMiniContainerSkeleton } from "./BlocksTableMiniContainerSkeleton";
import { BlocksTableMiniError } from "./BlocksTableMiniError";

export const BLOCKS_TABLE_MINI_NUMBER_ROWS_PER = 15;

const BlocksTableMiniQueryGRAPHQL = graphql`
  query BlocksTableMiniQuery(
    $first: Int!
    $after: String
    $input: BlocksInput!
  ) {
    blocks(first: $first, after: $after, input: $input) {
      edges {
        node {
          id
          ...BlocksTableMiniRowFragment_block
        }
      }
    }
  }
`;
export function BlocksTableMiniInner() {
  const blocksTableMiniData = useLazyLoadQuery<BlocksTableMiniQuery>(
    BlocksTableMiniQueryGRAPHQL,
    {
      first: BLOCKS_TABLE_MINI_NUMBER_ROWS_PER,
      input: {
        sort_by: "timestamp",
        order_by: "desc",
      },
    }
  );
  return (
    <BlocksTableMiniContainer
      blocksData={blocksTableMiniData}
      isLoading={false}
    />
  );
}

export function BlocksTableMini() {
  return (
    <ErrorBoundaryWithFallback
      renderFallbackComponent={(error: Error) => <BlocksTableMiniError />}
    >
      <SsrSuspense fallback={<BlocksTableMiniContainerSkeleton />}>
        <BlocksTableMiniInner />
      </SsrSuspense>
    </ErrorBoundaryWithFallback>
  );
}
