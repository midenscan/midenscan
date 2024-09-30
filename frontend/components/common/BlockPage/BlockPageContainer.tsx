import React from "react";

import { DetailsContainer } from "components/modules/DetailsContainer";
import { DetailsTabs, TabOption } from "components/modules/DetailsTab";
import { TabContainer } from "components/modules/TabContainer";

type BlockPageContainerProps = {
  selectedTab: TabOption;
  setSelectedTab: (tabOption: TabOption) => void;
  numberOfAccountUpdates: Nullable<number>;
  numberOfTransactions: Nullable<number>;
  numberOfNotes: Nullable<number>;

  children: React.ReactNode;
};
export function BlockPageContainer({
  selectedTab,
  setSelectedTab,
  numberOfAccountUpdates,
  numberOfTransactions,
  numberOfNotes,
  children,
}: BlockPageContainerProps) {
  return (
    <DetailsContainer
      title="Block"
      description="A block of transactions on the Miden blockchain."
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
            {
              option: TabOption.ACCOUNT_UPDATES,
              displayName: "Account Updates",
              displayCount: numberOfAccountUpdates,
              displayIsVerified: null,
            },
            {
              option: TabOption.TRANSACTIONS,
              displayName: "Transactions",
              displayCount: numberOfTransactions,
              displayIsVerified: null,
            },
            {
              option: TabOption.CREATED_NOTES,
              displayName: "Created Notes",
              displayCount: numberOfNotes,
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
