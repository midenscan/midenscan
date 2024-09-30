import { TabOption } from "components/modules/DetailsTab";
import { TransactionPageQuery$data } from "libs/types/__generated__/TransactionPageQuery.graphql";
import { TransactionPageOverviewTab } from "./TransactionPageOverviewTab";

export function TransactionPageTabs({
  selectedTab,
  transactionData,
}: {
  selectedTab: TabOption;
  transactionData: TransactionPageQuery$data;
}) {
  const transaction = transactionData.transaction;

  switch (selectedTab) {
    case TabOption.OVERVIEW: {
      return <TransactionPageOverviewTab transactionKey={transaction} />;
    }
  }

  return null;
}
