import { graphql, useLazyLoadQuery } from "react-relay";

import { NullifierPageQuery } from "libs/types/__generated__/NullifierPageQuery.graphql";
import { useDetailsTabState } from "components/modules/DetailsTab";
import { ErrorBoundaryWithFallback } from "components/modules/ErrorBoundaryWithFallback";
import { SsrSuspense } from "components/modules/SsrSuspense";
import { NullifierPageContainer } from "./NullifierPageContainer";
import { NullifierPageError } from "./NullifierPageError";
import { NullifierPageSkeleton } from "./NullifierPageSkeleton";
import { NullifierPageTabs } from "./NullifierPageTabs";

const NullifierPageQueryGRAPHQL = graphql`
  query NullifierPageQuery($input: NullifierInput!) {
    nullifier(input: $input) {
      nullifier
      ...NullifierPageOverviewTabFragment_nullifier
    }
  }
`;
function NullifierPageInner({ nullifier }: { nullifier: string }) {
  const [selectedTab, setSelectedTab] = useDetailsTabState();
  const nullifierData = useLazyLoadQuery<NullifierPageQuery>(
    NullifierPageQueryGRAPHQL,
    {
      input: {
        nullifier: nullifier,
      },
    }
  );

  return (
    <NullifierPageContainer
      selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}
    >
      <NullifierPageTabs
        selectedTab={selectedTab}
        nullifierData={nullifierData}
      />
    </NullifierPageContainer>
  );
}

export function NullifierPage({
  nullifier,
  loading,
}: {
  nullifier: Nullable<string>;
  loading: boolean;
}) {
  if (loading) {
    return <NullifierPageSkeleton />;
  }

  if (nullifier === null) {
    return <NullifierPageError error={new Error("Nullifier does not exist")} />;
  }

  return (
    <ErrorBoundaryWithFallback
      renderFallbackComponent={(error: Error) => (
        <NullifierPageError error={error} />
      )}
    >
      <SsrSuspense fallback={<NullifierPageSkeleton />}>
        <NullifierPageInner nullifier={nullifier} />
      </SsrSuspense>
    </ErrorBoundaryWithFallback>
  );
}
