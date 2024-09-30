import { AccountPageQuery$data } from "libs/types/__generated__/AccountPageQuery.graphql";
import { TabOption } from "components/modules/DetailsTab";
import {
  TransactionsTable,
  AccountVaultAssetsTable,
} from "components/modules/Tables";
import { AccountPageOverviewTab } from "./AccountPageOverviewTab";
import { AccountPageCodeTab } from "./AccountPageCodeTab";

export function AccountPageTabs({
  selectedTab,
  accountData,
}: {
  selectedTab: TabOption;
  accountData: AccountPageQuery$data;
}) {
  const account = accountData.account;

  switch (selectedTab) {
    case TabOption.OVERVIEW: {
      return <AccountPageOverviewTab accountKey={account} />;
    }
    case TabOption.TRANSACTIONS: {
      return <TransactionsTable account_id={account.account_id} />;
    }
    case TabOption.ACCOUNT_VAULT_ASSETS: {
      return <AccountVaultAssetsTable account_id={account.account_id} />;
    }
    case TabOption.ACCOUNT_CODE: {
      return <AccountPageCodeTab accountKey={account} />;
    }
  }

  return null;
}
