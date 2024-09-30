import React from "react";
import { graphql, useFragment } from "react-relay";

import { BlockNumberItem, HashItem } from "components/modules/Overview";
import { AccountPageOverviewTabFragment_account$key } from "libs/types/__generated__/AccountPageOverviewTabFragment_account.graphql";
import * as tooltipMessages from "libs/tooltipMessages";
import * as paths from "libs/paths";
import { AccountStorageModelItem } from "../AccountStorageModelItem";
import { AccountTypeItem } from "../AccountTypeItem";

const AccountPageOverviewTabFragmentGRAPHQL = graphql`
  fragment AccountPageOverviewTabFragment_account on Account {
    account_id
    is_private
    account_type
    is_faucet

    block_hash
    block_number

    latest_account_update {
      state_hash
      block_number
    }
  }
`;

export function AccountPageOverviewTab({
  accountKey,
}: {
  accountKey: AccountPageOverviewTabFragment_account$key;
}) {
  const account = useFragment(
    AccountPageOverviewTabFragmentGRAPHQL,
    accountKey
  );

  return (
    <dl className="sm:divide-y sm:divide-gray-200 dark:sm:divide-gray-600">
      <HashItem
        title="Account ID"
        titleTooltipMsg={tooltipMessages.ACCOUNT_ID}
        hash={account.account_id}
        href={paths.account(account.account_id)}
      />
      <AccountStorageModelItem
        accountStorageModelType={account.is_private ? "Private" : "Public"}
      />
      {account.account_type ? (
        <AccountTypeItem accountType={account.account_type} />
      ) : null}
      <HashItem
        title="State Hash"
        titleTooltipMsg={tooltipMessages.ACCOUNT_STATE_HASH}
        hash={account.latest_account_update.state_hash}
      />
      <BlockNumberItem
        blockNumber={account.latest_account_update.block_number}
        title="Last Updated Block Number"
        tooltipMessage="Number of the block in which the account state hash was last updated"
      />
    </dl>
  );
}
