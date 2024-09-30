import {
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/20/solid";
import { isNullOrUndefined } from "libs/check";

import { OrderBy } from "libs/types";

export function OrderByDirectionChevron({
  orderBy,
  setOrderBy,
}: {
  // DEVNOTE: set order by to null to display a neutral chevron
  orderBy: Nullable<OrderBy>;
  setOrderBy: (orderBy: OrderBy) => void;
}) {
  if (orderBy === "desc") {
    return (
      <span
        className="ml-1 flex-none rounded bg-gray-200 dark:bg-gray-700 dark:text-white text-gray-900 group-hover:bg-gray-300"
        onClick={() => setOrderBy("asc")}
      >
        <ChevronDownIcon
          className="h-4 w-4 cursor-pointer"
          aria-hidden="true"
        />
      </span>
    );
  } else if (orderBy === "asc") {
    return (
      <span
        className="ml-1 flex-none rounded bg-gray-200 dark:bg-gray-700 dark:text-white text-gray-900 group-hover:bg-gray-300"
        onClick={() => setOrderBy("desc")}
      >
        <ChevronUpIcon className="h-4 w-4 cursor-pointer" aria-hidden="true" />
      </span>
    );
  } else if (isNullOrUndefined(orderBy)) {
    return (
      <span
        className="ml-1 flex-none rounded bg-gray-200 dark:bg-gray-700 dark:text-white text-gray-900 group-hover:bg-gray-300"
        onClick={() => setOrderBy("desc")}
      >
        <ChevronUpDownIcon
          className="h-4 w-4 cursor-pointer"
          aria-hidden="true"
        />
      </span>
    );
  }

  return null;
}
