import { useState } from "react";
import { TabOption } from "components/modules/DetailsTab";

export function useDetailsTabState(
  defaultTabOption: Undefinedable<TabOption> = TabOption.OVERVIEW
): [TabOption, (tabOption: TabOption) => void] {
  const [selectedTab, setSelectedTab] = useState(defaultTabOption);
  return [selectedTab, setSelectedTab];
}
