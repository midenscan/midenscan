import { TabOption } from "components/modules/DetailsTab";
import { BlockPageContainer } from "./BlockPageContainer";
import { BlockPageOverviewTabSkeleton } from "./BlockPageOverviewTabSkeleton";

export function BlockPageSkeleton() {
  return (
    <BlockPageContainer
      selectedTab={TabOption.OVERVIEW}
      setSelectedTab={() => {}}
      numberOfAccountUpdates={null}
      numberOfTransactions={null}
      numberOfNotes={null}
    >
      <BlockPageOverviewTabSkeleton />
    </BlockPageContainer>
  );
}
