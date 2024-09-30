import { NoteTypeBadge } from "components/modules/Badges";
import { InfoTooltip } from "components/modules/Tooltip";
import * as tooltipMessages from "libs/tooltipMessages";
import { MidenNoteType } from "libs/types";

export function NoteTypeItem({ noteType }: { noteType: MidenNoteType }) {
  return (
    <div className="bg-white dark:bg-darkMuted px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500 dark:text-white">
        <div className="flex items-center gap-x-1">
          <InfoTooltip message={tooltipMessages.NOTE_TYPE} />
          Note Type
        </div>
      </dt>
      <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
        <NoteTypeBadge noteType={noteType} />
      </dd>
    </div>
  );
}
