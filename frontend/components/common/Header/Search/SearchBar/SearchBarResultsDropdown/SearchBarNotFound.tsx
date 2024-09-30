import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export function SearchBarNotFound() {
  return (
    <div className="py-14 px-6 text-center text-sm sm:px-14">
      <MagnifyingGlassIcon
        className="mx-auto h-6 w-6 text-gray-400 dark:text-gray-200"
        aria-hidden="true"
      />
      <p className="mt-4 font-semibold text-gray-900 dark:text-white">
        No results found
      </p>
    </div>
  );
}
