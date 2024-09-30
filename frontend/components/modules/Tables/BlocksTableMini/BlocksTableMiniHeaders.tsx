export function BlocksTableMiniHeaders() {
  return (
    <thead className="bg-gray-50 dark:bg-darkMuted">
      <tr>
        <th
          scope="col"
          className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white sm:pl-6"
        >
          Number
        </th>
        <th
          scope="col"
          className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
        >
          Block Hash
        </th>
        <th
          scope="col"
          className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
        >
          Age
        </th>
      </tr>
    </thead>
  );
}
