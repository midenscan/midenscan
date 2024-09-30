import { BaseItem } from "./BaseItem";
import { unixTimestampSecondsToHumanDisplayTime } from "libs/format";

export function HumanTimestampItem({
  title,
  timestamp,
  tooltipMessage,
}: {
  title?: string;
  timestamp: number;
  tooltipMessage: string;
}) {
  const finalTitle = title ?? "Timestamp";
  return (
    <BaseItem
      title={finalTitle}
      titleTooltipMsg={tooltipMessage}
      displayValue={unixTimestampSecondsToHumanDisplayTime(timestamp)}
    />
  );
}
