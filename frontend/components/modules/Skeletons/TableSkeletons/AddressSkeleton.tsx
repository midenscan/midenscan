import React from "react";

import { classNames } from "libs/styles";

export function AddressSkeleton({ className }: { className?: string }) {
  return (
    <td
      className={classNames(
        "whitespace-nowrap pl-4 px-2 pb-2 pt-2.5 text-xs font-medium text-blue-800 font-mono",
        className ?? ""
      )}
    >
      <div className="flex items-center gap-x-1">
        <div className="bg-gray-100 text-gray-100 dark:bg-gray-700 dark:text-gray-700 w-fit">
          0x0490…ad69
        </div>
        <div className="bg-gray-100 text-gray-100 dark:bg-gray-700 dark:text-gray-700 w-fit">
          0x
        </div>
      </div>
    </td>
  );
}
