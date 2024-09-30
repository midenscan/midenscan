import { graphql, useFragment } from "react-relay";
import { Square2StackIcon } from "@heroicons/react/24/outline";

import { LinkRef } from "components/modules/LinkRef";
import { CopyAddressTooltip, TooltipWrapper } from "components/modules/Tooltip";
import { TransactionsTableRowFragment_transaction$key } from "libs/types/__generated__/TransactionsTableRowFragment_transaction.graphql";
import { truncateSmart } from "libs/format";
import * as paths from "libs/paths";

const TransactionsTableRowFragment_transaction_GRAPHQL = graphql`
  fragment TransactionsTableRowFragment_transaction on Transaction {
    id
    transaction_id
    account_id
    block_number
  }
`;
export function TransactionsTableRow({
  transactionKey,
}: {
  transactionKey: TransactionsTableRowFragment_transaction$key;
}) {
  const transaction = useFragment(
    TransactionsTableRowFragment_transaction_GRAPHQL,
    transactionKey
  );

  return (
    <tr key={transaction.id}>
      <td className="whitespace-nowrap py-2 pl-4 pr-3 sm:pl-6 text-xs font-medium text-blue-800 dark:text-blue-400 font-mono">
        <div className="flex items-center gap-x-1">
          <LinkRef
            href={paths.transaction(transaction.transaction_id)}
            className="hover:underline"
          >
            <TooltipWrapper message={transaction.transaction_id}>
              {truncateSmart(transaction.transaction_id)}
            </TooltipWrapper>
          </LinkRef>
          <CopyAddressTooltip
            address={transaction.transaction_id}
            offsetOptions={{ offset: [0, 7] }}
          >
            <Square2StackIcon className="h-5 w-4 text-gray-900 dark:text-white cursor-pointer" />
          </CopyAddressTooltip>
        </div>
      </td>
      <td className="whitespace-nowrap px-2 pb-2 pt-2.5 text-xs font-medium text-blue-800 dark:text-blue-400 font-mono">
        <div className="flex items-center gap-x-1">
          <LinkRef
            href={paths.account(transaction.account_id)}
            className="hover:underline"
          >
            <TooltipWrapper message={transaction.account_id}>
              {truncateSmart(transaction.account_id)}
            </TooltipWrapper>
          </LinkRef>
          <CopyAddressTooltip
            address={transaction.account_id}
            offsetOptions={{ offset: [0, 7] }}
          >
            <Square2StackIcon className="h-5 w-4 text-gray-900 dark:text-white cursor-pointer" />
          </CopyAddressTooltip>
        </div>
      </td>
      <td className="whitespace-nowrap py-2 pl-2 pr-3 text-xs text-blue-800 dark:text-blue-400 font-mono">
        <LinkRef
          href={paths.block(transaction.block_number)}
          className="hover:underline"
        >
          {transaction.block_number}
        </LinkRef>
      </td>
    </tr>
  );
}
