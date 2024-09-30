import { classNames } from "libs/styles";

export function SmallNumberSkeleton({ className }: { className?: string }) {
  return (
    <td
      className={classNames(
        "whitespace-nowrap pl-2 py-2 pr-3 text-sm text-gray-500",
        className ?? ""
      )}
    >
      <div className="bg-gray-100 text-gray-100 dark:bg-gray-700 dark:text-gray-700 w-fit">
        10
      </div>
    </td>
  );
}
