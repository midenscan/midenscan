import * as tooltipMessages from "libs/tooltipMessages";
import * as paths from "libs/paths";

import { HashItem } from "./HashItem";

export function BlockHashItem({
  title,
  tooltipMessage,
  blockHash,
}: {
  title?: string;
  tooltipMessage?: string;
  blockHash: Nullable<string>;
}) {
  if (!blockHash) {
    return null;
  }
  const finalTitle = title ?? "Block Hash";
  const finalTooltipMessage = tooltipMessage ?? tooltipMessages.BLOCK_HASH;

  return (
    <HashItem
      title={finalTitle}
      titleTooltipMsg={finalTooltipMessage}
      hash={blockHash}
      href={paths.block(blockHash)}
    />
  );
}
