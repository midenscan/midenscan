import { graphql, useFragment } from "react-relay";
import { Square2StackIcon } from "@heroicons/react/24/outline";

import { LinkRef } from "components/modules/LinkRef";
import { CopyAddressTooltip, TooltipWrapper } from "components/modules/Tooltip";
import { NoteAssetsTableRowFragment_noteAsset$key } from "libs/types/__generated__/NoteAssetsTableRowFragment_noteAsset.graphql";
import { truncateSmart } from "libs/format";
import * as paths from "libs/paths";

const NoteAssetsTableRowFragment_noteAsset_GRAPHQL = graphql`
  fragment NoteAssetsTableRowFragment_noteAsset on NoteAsset {
    id
    faucet_id
    note_id
    amount
  }
`;
export function NoteAssetsTableRow({
  noteAssetKey,
}: {
  noteAssetKey: NoteAssetsTableRowFragment_noteAsset$key;
}) {
  const noteAsset = useFragment(
    NoteAssetsTableRowFragment_noteAsset_GRAPHQL,
    noteAssetKey
  );

  return (
    <tr key={noteAsset.id}>
      <td className="whitespace-nowrap pl-4 sm:pl-6 pr-3 pb-2 pt-2.5 text-xs font-medium text-blue-800 dark:text-blue-400 font-mono">
        <div className="flex items-center gap-x-1">
          <LinkRef
            href={paths.account(noteAsset.faucet_id)}
            className="hover:underline"
          >
            <TooltipWrapper message={noteAsset.faucet_id}>
              {truncateSmart(noteAsset.faucet_id)}
            </TooltipWrapper>
          </LinkRef>
          {noteAsset.faucet_id ? (
            <CopyAddressTooltip
              address={noteAsset.faucet_id}
              offsetOptions={{ offset: [0, 7] }}
            >
              <Square2StackIcon className="h-5 w-4 text-gray-900 dark:text-white cursor-pointer" />
            </CopyAddressTooltip>
          ) : null}
        </div>
      </td>
      <td className="whitespace-nowrap px-2 pb-2 pt-2.5 text-xs font-medium text-blue-800 dark:text-blue-400 font-mono">
        <div className="flex items-center gap-x-1">
          <LinkRef
            href={paths.account(noteAsset.note_id)}
            className="hover:underline"
          >
            <TooltipWrapper message={noteAsset.note_id}>
              {truncateSmart(noteAsset.note_id)}
            </TooltipWrapper>
          </LinkRef>
          <CopyAddressTooltip
            address={noteAsset.note_id}
            offsetOptions={{ offset: [0, 7] }}
          >
            <Square2StackIcon className="h-5 w-4 text-gray-900 dark:text-white cursor-pointer" />
          </CopyAddressTooltip>
        </div>
      </td>
      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500 dark:text-white">
        <div className="w-fit">{noteAsset.amount}</div>
      </td>
    </tr>
  );
}
