import React from "react";
import { graphql, useFragment } from "react-relay";

import { TransactionPageOverviewTabFragment_transaction$key } from "libs/types/__generated__/TransactionPageOverviewTabFragment_transaction.graphql";
import { HashItem, BlockNumberItem } from "components/modules/Overview";
import * as paths from "libs/paths";
import * as tooltipMessages from "libs/tooltipMessages";

const TransactionPageOverviewTabFragmentGRAPHQL = graphql`
  fragment TransactionPageOverviewTabFragment_transaction on Transaction {
    transaction_id
    account_id
    block_number
  }
`;
export function TransactionPageOverviewTab({
  transactionKey,
}: {
  transactionKey: TransactionPageOverviewTabFragment_transaction$key;
}) {
  const transaction = useFragment(
    TransactionPageOverviewTabFragmentGRAPHQL,
    transactionKey
  );

  return (
    <dl className="sm:divide-y sm:divide-gray-200 dark:sm:divide-gray-600">
      <HashItem
        title="Transaction ID"
        titleTooltipMsg={tooltipMessages.TRANSACTION_ID}
        hash={transaction.transaction_id}
        href={paths.transaction(transaction.transaction_id)}
      />
      <HashItem
        title="Account ID"
        titleTooltipMsg={tooltipMessages.TRANSACTION_ACCOUNT_ID}
        hash={transaction.account_id}
        href={paths.account(transaction.account_id)}
      />
      <BlockNumberItem
        blockNumber={transaction.block_number}
        tooltipMessage={tooltipMessages.TRANSACTION_BLOCK_NUMBER}
      />
    </dl>
  );
}
