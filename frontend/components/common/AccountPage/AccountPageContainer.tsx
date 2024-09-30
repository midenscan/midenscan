import React from "react";

import { DetailsContainer } from "components/modules/DetailsContainer";
import { DetailsTabs, TabOption } from "components/modules/DetailsTab";
import { TabContainer } from "components/modules/TabContainer";
import * as tooltipMessages from "libs/tooltipMessages";

type AccountPageContainerProps = {
  selectedTab: TabOption;
  setSelectedTab: (tabOption: TabOption) => void;
  isAccountPrivate: boolean;
  children: React.ReactNode;
};
export function AccountPageContainer({
  selectedTab,
  setSelectedTab,
  isAccountPrivate,
  children,
}: AccountPageContainerProps) {
  const detailsTabs = [
    {
      option: TabOption.OVERVIEW,
      displayName: "Overview",
      displayCount: null,
      displayIsVerified: null,
    },
    {
      option: TabOption.TRANSACTIONS,
      displayName: "Transactions",
      displayCount: null,
      displayIsVerified: null,
    },
  ];
  if (!isAccountPrivate) {
    detailsTabs.push(
      ...[
        {
          option: TabOption.ACCOUNT_VAULT_ASSETS,
          displayName: "Vault Assets",
          displayCount: null,
          displayIsVerified: null,
        },
        {
          option: TabOption.ACCOUNT_CODE,
          displayName: "Procedure Digests",
          displayCount: null,
          displayIsVerified: null,
        },
      ]
    );
  }

  return (
    <DetailsContainer
      title="Account"
      description={tooltipMessages.ACCOUNT_PAGE_DESCRIPTION}
    >
      <div className="px-4 sm:px-6">
        <DetailsTabs
          tabOptions={detailsTabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </div>
      <TabContainer>{children}</TabContainer>
    </DetailsContainer>
  );
}
