export function OverviewHashSkeleton() {
  return (
    <div className="bg-white dark:bg-darkMuted px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500 dark:text-white">
        <div className="flex items-center gap-x-1">
          <div className="bg-gray-100 text-gray-100 dark:bg-gray-700 dark:text-gray-700 w-fit">
            {"Overview Title"}
          </div>
        </div>
      </dt>
      <dd className="flex items-center gap-x-3 mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2 font-mono">
        <div className="bg-gray-100 text-gray-100 dark:bg-gray-700 dark:text-gray-700 w-fit">
          {"0x00e271689c5a0966ffea59a05f66321502d1627a6762a09d4f510ceb87dabb5c"}
        </div>
      </dd>
    </div>
  );
}
