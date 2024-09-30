import { TabOption } from "components/modules/DetailsTab";
import { NullifierPageContainer } from "./NullifierPageContainer";
import { NullifierPageOverviewTabSkeleton } from "./NullifierPageOverviewTabSkeleton";

export function NullifierPageSkeleton() {
  return (
    <NullifierPageContainer
      selectedTab={TabOption.OVERVIEW}
      setSelectedTab={() => {}}
    >
      <NullifierPageOverviewTabSkeleton />
    </NullifierPageContainer>
  );
}
