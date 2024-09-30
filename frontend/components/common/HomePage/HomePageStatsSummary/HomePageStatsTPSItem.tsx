import React from "react";
import { graphql, useFragment } from "react-relay";
import { BoltIcon } from "@heroicons/react/20/solid";

import { TooltipWrapper } from "components/modules/Tooltip";
import * as tooltipMessages from "libs/tooltipMessages";
import { HomePageStatsTPSItemFragment_overviewStats$key } from "libs/types/__generated__/HomePageStatsTPSItemFragment_overviewStats.graphql";

const HomePageStatsTPSItemFragmentGRAPHQL = graphql`
  fragment HomePageStatsTPSItemFragment_overviewStats on OverviewStats {
    transactions_per_second
  }
`;

export function HomePageStatsTPSItem({
  overviewStatsKey,
  loading,
}: {
  overviewStatsKey: Nullable<HomePageStatsTPSItemFragment_overviewStats$key>;
  loading: boolean;
}) {
  const overviewStats = useFragment(
    HomePageStatsTPSItemFragmentGRAPHQL,
    overviewStatsKey
  );
  const tps = overviewStats?.transactions_per_second?.toFixed(2);

  return (
    <>
      <TooltipWrapper message={tooltipMessages.TPS}>
        <div className="flex py-2 px-3">
          <BoltIcon className="mr-2.5 h-5 w-5 fill-primary dark:fill-darkPrimary" />
          TPS
        </div>
      </TooltipWrapper>
      {loading ? (
        <div className="py-2 px-2.5 bg-white dark:bg-darkMuted border-l border-slate-400/20 rounded-md">
          <div className="text-gray-100 bg-gray-100 dark:bg-gray-700 dark:text-gray-700">
            0.50
          </div>
        </div>
      ) : (
        <div className="border-l border-slate-400/20 py-2 px-2.5">{tps}</div>
      )}
    </>
  );
}
