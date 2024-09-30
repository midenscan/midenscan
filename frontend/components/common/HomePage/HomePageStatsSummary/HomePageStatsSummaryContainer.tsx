import { LinkRef } from "components/modules/LinkRef";
import { StatsSkeleton } from "components/modules/Skeletons";
import { NumberTicker } from "components/modules/NumberTicker";
import { HomePageStatsSummaryOverviewStatsQuery$data } from "libs/types/__generated__/HomePageStatsSummaryOverviewStatsQuery.graphql";
import { useHomePageStatsInfo } from "./useHomePageStatsInfo";
import { HomePageStatsTPSItem } from "./HomePageStatsTPSItem";

export function HomePageStatsSummaryContainer({
  overviewStatsData,
  loading,
}: {
  overviewStatsData: Nullable<HomePageStatsSummaryOverviewStatsQuery$data>;
  loading: boolean;
}) {
  const statsInfo = useHomePageStatsInfo(
    overviewStatsData?.overviewStats ?? null
  );

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pt-8 pb-8">
      <div className="flex w-full justify-between items-end flex-wrap gap-y-6 gap-x-2">
        <div className="flex gap-x-3 flex-wrap gap-y-8 items-end">
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <HomePageStatsTPSItem
                overviewStatsKey={overviewStatsData?.overviewStats ?? null}
                loading={loading}
              />
            </div>
          </div>
        </div>
      </div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {statsInfo.map((statsInfo) => (
          <div
            key={statsInfo.name}
            className="relative overflow-hidden rounded-lg bg-white dark:bg-darkMuted border-slate-200 dark:border-none border px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute p-3">
                <statsInfo.icon
                  className="h-6 w-6 text-gray-500 dark:text-darkPrimary"
                  aria-hidden="true"
                />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500 dark:text-darkSecondary">
                {statsInfo.name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              {loading ? (
                <StatsSkeleton />
              ) : (
                <NumberTicker textClassName="text-2xl font-semibold text-gray-900 dark:text-white">
                  {statsInfo.stat}
                </NumberTicker>
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gray-50 dark:bg-gray-800 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <LinkRef
                    href={statsInfo.href}
                    className="font-medium text-blue-800 hover:underline dark:text-blue-400"
                  >
                    View all
                    <span className="sr-only"> {statsInfo.name} stats</span>
                  </LinkRef>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
