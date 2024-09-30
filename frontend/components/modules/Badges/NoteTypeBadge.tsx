import { TooltipWrapper } from "components/modules/Tooltip";
import { MidenNoteType } from "libs/types";
import { classNames } from "libs/styles";
import * as tooltipMessages from "libs/tooltipMessages";

export function NoteTypeBadge({ noteType }: { noteType: MidenNoteType }) {
  // DEVNOTE: we need the classNames here or else tailwind will not pick it up
  let transactionColorClassNames =
    "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100";
  let tooltipMessage = "";

  if (noteType === "Public") {
    transactionColorClassNames =
      "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100";
    tooltipMessage = tooltipMessages.NOTE_PUBLIC;
  } else if (noteType === "Encrypted") {
    transactionColorClassNames =
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100";
    tooltipMessage = tooltipMessages.NOTE_ENCRYPTED;
  } else if (noteType === "Private") {
    transactionColorClassNames =
      "bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100";
    tooltipMessage = tooltipMessages.NOTE_PRIVATE;
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
        {noteType}
      </TooltipWrapper>
    </span>
  );
}
