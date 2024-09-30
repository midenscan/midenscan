import { useEffect } from "react";
import {
  graphql,
  PreloadedQuery,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";

import { ErrorBoundaryWithFallback } from "components/modules/ErrorBoundaryWithFallback";
import { HomePageStatsSummaryOverviewStatsQuery } from "libs/types/__generated__/HomePageStatsSummaryOverviewStatsQuery.graphql";
import { HomePageStatsSummaryContainer } from "./HomePageStatsSummaryContainer";
import { HomePageStatsSummaryContainerSkeleton } from "./HomePageStatsSummaryContainerSkeleton";
import { HomePageStatsSummaryError } from "./HomePageStatsSummaryError";

const HomePageStatsSummaryOverviewStatsQueryGRAPHQL = graphql`
  query HomePageStatsSummaryOverviewStatsQuery {
    overviewStats {
      ...useHomePageStatsInfoFragment_overviewStats
      ...HomePageStatsTPSItemFragment_overviewStats
    }
  }
`;

function HomePageStatsSummaryInner({
  queryReference,
}: {
  queryReference: PreloadedQuery<HomePageStatsSummaryOverviewStatsQuery>;
}) {
  const overviewStatsData = usePreloadedQuery(
    HomePageStatsSummaryOverviewStatsQueryGRAPHQL,
    queryReference
  );

  return (
    <HomePageStatsSummaryContainer
      overviewStatsData={overviewStatsData}
      loading={false}
    />
  );
}

function HomePageStatsSummaryLoader() {
  const [queryReference, loadQuery] =
    useQueryLoader<HomePageStatsSummaryOverviewStatsQuery>(
      HomePageStatsSummaryOverviewStatsQueryGRAPHQL
    );

  useEffect(() => {
    loadQuery({}, { fetchPolicy: "network-only" });

    const intervalId = setInterval(() => {
      loadQuery({}, { fetchPolicy: "network-only" });
    }, 10_000 /* 10 seconds */);

    return () => clearInterval(intervalId);
  }, [loadQuery]);

  if (!queryReference) {
    return <HomePageStatsSummaryContainerSkeleton />;
  }

  return <HomePageStatsSummaryInner queryReference={queryReference} />;
}

export function HomePageStatsSummary() {
  return (
    <ErrorBoundaryWithFallback
      renderFallbackComponent={(error: Error) => <HomePageStatsSummaryError />}
    >
      <HomePageStatsSummaryLoader />
    </ErrorBoundaryWithFallback>
  );
}
