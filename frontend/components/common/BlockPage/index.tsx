import { graphql, useLazyLoadQuery } from "react-relay";

import { BlockPageQuery } from "libs/types/__generated__/BlockPageQuery.graphql";
import { useDetailsTabState } from "components/modules/DetailsTab";
import { ErrorBoundaryWithFallback } from "components/modules/ErrorBoundaryWithFallback";
import { SsrSuspense } from "components/modules/SsrSuspense";
import { BlockPageContainer } from "./BlockPageContainer";
import { BlockPageError } from "./BlockPageError";
import { BlockPageSkeleton } from "./BlockPageSkeleton";
import { BlockPageTabs } from "./BlockPageTabs";

const BlockPageQueryGRAPHQL = graphql`
  query BlockPageQuery($input: BlockInput!) {
    block(input: $input) {
      block_hash
      number_of_account_updates
      number_of_transactions
      number_of_notes
      ...BlockPageOverviewTabFragment_block
    }
  }
`;
function BlockPageInner({ blockIdentifier }: { blockIdentifier: string }) {
  const [selectedTab, setSelectedTab] = useDetailsTabState();
  const blockData = useLazyLoadQuery<BlockPageQuery>(BlockPageQueryGRAPHQL, {
    input: {
      block_identifier: blockIdentifier,
    },
  });
  const block = blockData.block;

  return (
    <BlockPageContainer
      selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}
      numberOfAccountUpdates={block?.number_of_account_updates ?? null}
      numberOfTransactions={block?.number_of_transactions ?? null}
      numberOfNotes={block?.number_of_notes ?? null}
    >
      <BlockPageTabs selectedTab={selectedTab} blockData={blockData} />
    </BlockPageContainer>
  );
}

export function BlockPage({
  blockIdentifier,
  loading,
}: {
  blockIdentifier: Nullable<string>;
  loading: boolean;
}) {
  if (loading) {
    return <BlockPageSkeleton />;
  }

  if (blockIdentifier === null) {
    return <BlockPageError error={new Error("Block does not exist")} />;
  }

  return (
    <ErrorBoundaryWithFallback
      renderFallbackComponent={(error: Error) => (
        <BlockPageError error={error} />
      )}
    >
      <SsrSuspense fallback={<BlockPageSkeleton />}>
        <BlockPageInner blockIdentifier={blockIdentifier} />
      </SsrSuspense>
    </ErrorBoundaryWithFallback>
  );
}
