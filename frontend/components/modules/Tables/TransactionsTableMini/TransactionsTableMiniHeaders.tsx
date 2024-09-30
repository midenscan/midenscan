export function TransactionsTableMiniHeaders() {
  return (
    <thead className="bg-gray-50 dark:bg-darkMuted">
      <tr>
        <th
          scope="col"
          className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white sm:pl-6"
        >
          Transaction Hash
        </th>
        <th
          scope="col"
          className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
        >
          Account ID
        </th>
        <th
          scope="col"
          className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
        >
          Commited Block
        </th>
      </tr>
    </thead>
  );
}
