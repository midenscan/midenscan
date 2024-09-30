import { classNames } from "libs/styles";

export function NumberSkeleton({ className }: { className?: string }) {
  return (
    <td
      className={classNames(
        "whitespace-nowrap py-2 pr-3 pl-2 text-sm text-gray-500",
        className ?? ""
      )}
    >
      <div className="bg-gray-100 text-gray-100 dark:bg-gray-700 dark:text-gray-700 w-fit">
        100000
      </div>
    </td>
  );
}
