import { TabOption } from "components/modules/DetailsTab";
import { TransactionPageContainer } from "./TransactionPageContainer";
import { TransactionPageOverviewTabSkeleton } from "./TransactionPageOverviewTabSkeleton";

export function TransactionPageSkeleton() {
  return (
    <TransactionPageContainer
      selectedTab={TabOption.OVERVIEW}
      setSelectedTab={() => {}}
    >
      <TransactionPageOverviewTabSkeleton />
    </TransactionPageContainer>
  );
}
