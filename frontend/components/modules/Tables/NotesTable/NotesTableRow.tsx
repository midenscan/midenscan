import { graphql, useFragment } from "react-relay";
import { Square2StackIcon } from "@heroicons/react/24/outline";

import { LinkRef } from "components/modules/LinkRef";
import {
  CopyAddressTooltip,
  InfoTooltip,
  TooltipWrapper,
} from "components/modules/Tooltip";
import { NotesTableRowFragment_note$key } from "libs/types/__generated__/NotesTableRowFragment_note.graphql";
import { truncateSmart } from "libs/format";
import * as paths from "libs/paths";
import { NoteTypeBadge } from "components/modules/Badges";

const NotesTableRowFragment_note_GRAPHQL = graphql`
  fragment NotesTableRowFragment_note on Note {
    id
    note_id
    note_type
    block_number
  }
`;
export function NotesTableRow({
  noteKey,
}: {
  noteKey: NotesTableRowFragment_note$key;
}) {
  const note = useFragment(NotesTableRowFragment_note_GRAPHQL, noteKey);

  return (
    <tr key={note.id}>
      <td className="whitespace-nowrap py-2 pl-4 pr-3 sm:pl-6 text-xs font-medium text-blue-800 dark:text-blue-400 font-mono">
        <div className="flex items-center gap-x-1">
          <LinkRef href={paths.note(note.note_id)} className="hover:underline">
            <TooltipWrapper message={note.note_id}>
              {truncateSmart(note.note_id)}
            </TooltipWrapper>
          </LinkRef>
          {note.note_id ? (
            <CopyAddressTooltip
              address={note.note_id}
              offsetOptions={{ offset: [0, 7] }}
            >
              <Square2StackIcon className="h-5 w-4 text-gray-900 dark:text-white cursor-pointer" />
            </CopyAddressTooltip>
          ) : null}
        </div>
      </td>
      <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900 dark:text-white">
        <NoteTypeBadge noteType={note.note_type} />
      </td>
      <td className="whitespace-nowrap py-2 pl-2 pr-3 text-xs text-blue-800 dark:text-blue-400 font-mono">
        <LinkRef
          href={paths.block(note.block_number)}
          className="hover:underline"
        >
          {note.block_number}
        </LinkRef>
      </td>
    </tr>
  );
}
