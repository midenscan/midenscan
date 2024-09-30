import * as tooltipMessages from "libs/tooltipMessages";
import * as paths from "libs/paths";

import { BaseItem } from "./BaseItem";

export function BlockNumberItem({
  title,
  tooltipMessage,
  blockNumber,
}: {
  title?: string;
  tooltipMessage?: string;
  blockNumber: number;
}) {
  const finalTitle = title ?? "Block Number";
  const finalTooltipMessage = tooltipMessage ?? tooltipMessages.BLOCK_NUMBER;

  return (
    <BaseItem
      title={finalTitle}
      titleTooltipMsg={finalTooltipMessage}
      displayValue={blockNumber.toString()}
      href={paths.block(blockNumber)}
    />
  );
}
