import { OverviewHashSkeleton } from "components/modules/Skeletons";

export function AccountPageOverviewTabSkeleton() {
  return (
    <dl className="sm:divide-y sm:divide-gray-200 dark:sm:divide-gray-600">
      <OverviewHashSkeleton />
      <OverviewHashSkeleton />
      <OverviewHashSkeleton />
      <OverviewHashSkeleton />
      <OverviewHashSkeleton />
      <OverviewHashSkeleton />
      <OverviewHashSkeleton />
      <OverviewHashSkeleton />
      <OverviewHashSkeleton />
    </dl>
  );
}
