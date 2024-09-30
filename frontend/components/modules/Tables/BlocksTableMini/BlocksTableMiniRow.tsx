import { graphql, useFragment } from "react-relay";
import { Square2StackIcon } from "@heroicons/react/24/outline";

import { LinkRef } from "components/modules/LinkRef";
import { CopyAddressTooltip, TooltipWrapper } from "components/modules/Tooltip";
import { BlocksTableMiniRowFragment_block$key } from "libs/types/__generated__/BlocksTableMiniRowFragment_block.graphql";
import * as paths from "libs/paths";
import {
  unixTimestampSecondsToHumanDisplayTime,
  truncateSmart,
  timeDifferenceFromTimestamp,
} from "libs/format";

const BlocksTableMiniRowFragment_block_GRAPHQL = graphql`
  fragment BlocksTableMiniRowFragment_block on Block {
    block_hash
    block_number
    timestamp
  }
`;
export function BlocksTableMiniRow({
  blockKey,
}: {
  blockKey: BlocksTableMiniRowFragment_block$key;
}) {
  const block = useFragment(BlocksTableMiniRowFragment_block_GRAPHQL, blockKey);

  return (
    <tr key={block.block_hash}>
      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-xs text-blue-800 dark:text-blue-400 font-mono sm:pl-6">
        <LinkRef
          href={paths.block(block.block_number)}
          className="hover:underline"
        >
          {block.block_number}
        </LinkRef>
      </td>
      <td className="whitespace-nowrap px-2 pb-2 pt-2.5 text-xs font-medium text-blue-800 dark:text-blue-400 font-mono">
        <div className="flex items-center gap-x-1">
          <LinkRef
            href={paths.block(block.block_hash)}
            className="hover:underline"
          >
            <TooltipWrapper message={block.block_hash}>
              {truncateSmart(block.block_hash)}
            </TooltipWrapper>
          </LinkRef>
          {block.block_hash ? (
            <CopyAddressTooltip
              address={block.block_hash}
              offsetOptions={{ offset: [0, 7] }}
            >
              <Square2StackIcon className="h-5 w-4 text-gray-900 dark:text-white cursor-pointer" />
            </CopyAddressTooltip>
          ) : null}
        </div>
      </td>
      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500 dark:text-white">
        <div className="w-fit">
          <TooltipWrapper
            message={unixTimestampSecondsToHumanDisplayTime(block.timestamp)}
            className="w-fit cursor-default"
          >
            <p suppressHydrationWarning>
              {timeDifferenceFromTimestamp(block.timestamp)}
            </p>
          </TooltipWrapper>
        </div>
      </td>
    </tr>
  );
}
