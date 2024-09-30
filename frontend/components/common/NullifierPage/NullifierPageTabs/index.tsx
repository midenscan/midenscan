import { TabOption } from "components/modules/DetailsTab";
import { NullifierPageQuery$data } from "libs/types/__generated__/NullifierPageQuery.graphql";
import { NullifierPageOverviewTab } from "./NullifierPageOverviewTab";

export function NullifierPageTabs({
  selectedTab,
  nullifierData,
}: {
  selectedTab: TabOption;
  nullifierData: NullifierPageQuery$data;
}) {
  const nullifier = nullifierData.nullifier;

  switch (selectedTab) {
    case TabOption.OVERVIEW: {
      return <NullifierPageOverviewTab nullifierKey={nullifier} />;
    }
  }

  return null;
}
