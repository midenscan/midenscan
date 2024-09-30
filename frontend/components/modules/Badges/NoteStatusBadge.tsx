import { classNames } from "libs/styles";
import { TooltipWrapper } from "components/modules/Tooltip";
import { MidenNoteStatus } from "libs/types";

export function NoteStatusBadge({
  noteStatus,
}: {
  noteStatus: MidenNoteStatus;
}) {
  // DEVNOTE: we need the classNames here or else tailwind will not pick it up
  let transactionColorClassNames =
    "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100";
  let tooltipMessage = "";

  if (noteStatus === "UNKNOWN") {
    transactionColorClassNames =
      "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100";
    tooltipMessage = "An unknown note status, most likely a private note.";
  } else if (noteStatus === "COMMITTED") {
    transactionColorClassNames =
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100";
    tooltipMessage = "A committed note waiting to be consumed.";
  } else if (noteStatus === "CONSUMED") {
    transactionColorClassNames =
      "bg-lime-100 text-lime-800 dark:bg-lime-800 dark:text-lime-100";
    tooltipMessage = "A note that has been consumed by an account.";
  }

  return (
    <span
      className={classNames(
        "inline-flex items-center rounded-md px-1.5 py-0.5 text-xs font-medium font-mono",
        transactionColorClassNames
      )}
    >
      <TooltipWrapper
        message={tooltipMessage}
        className="cursor-help"
        flipOptions={{ padding: -10 }}
      >
        {noteStatus}
      </TooltipWrapper>
    </span>
  );
}
