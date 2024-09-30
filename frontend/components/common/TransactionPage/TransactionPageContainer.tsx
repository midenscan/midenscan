import React from "react";

import { DetailsContainer } from "components/modules/DetailsContainer";
import { DetailsTabs, TabOption } from "components/modules/DetailsTab";
import { TabContainer } from "components/modules/TabContainer";
import * as tooltipMessages from "libs/tooltipMessages";

type TransactionPageContainerProps = {
  selectedTab: TabOption;
  setSelectedTab: (tabOption: TabOption) => void;
  children: React.ReactNode;
};
export function TransactionPageContainer({
  selectedTab,
  setSelectedTab,
  children,
}: TransactionPageContainerProps) {
  return (
    <DetailsContainer
      title="Transaction"
      description={tooltipMessages.TRANSACTION}
    >
      <div className="px-4 sm:px-6">
        <DetailsTabs
          tabOptions={[
            {
              option: TabOption.OVERVIEW,
              displayName: "Overview",
              displayCount: null,
              displayIsVerified: null,
            },
          ]}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </div>
      <TabContainer>{children}</TabContainer>
    </DetailsContainer>
  );
}
