import { TabOption } from "components/modules/DetailsTab";
import { AccountPageContainer } from "./AccountPageContainer";
import { AccountPageOverviewTabSkeleton } from "./AccountPageOverviewTabSkeleton";

export function AccountPageSkeleton() {
  return (
    <AccountPageContainer
      selectedTab={TabOption.OVERVIEW}
      setSelectedTab={() => {}}
      isAccountPrivate={true}
    >
      <AccountPageOverviewTabSkeleton />
    </AccountPageContainer>
  );
}
