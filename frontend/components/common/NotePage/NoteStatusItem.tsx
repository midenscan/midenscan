import { NoteStatusBadge } from "components/modules/Badges";
import { InfoTooltip } from "components/modules/Tooltip";
import { NOTE_STATUS } from "libs/tooltipMessages";
import { MidenNoteStatus } from "libs/types";

export function NoteStatusItem({
  noteStatus,
}: {
  noteStatus: MidenNoteStatus;
}) {
  return (
    <div className="bg-white dark:bg-darkMuted px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500 dark:text-white">
        <div className="flex items-center gap-x-1">
          <InfoTooltip message={NOTE_STATUS} />
          Note Status
        </div>
      </dt>
      <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
        <NoteStatusBadge noteStatus={noteStatus} />
      </dd>
    </div>
  );
}
