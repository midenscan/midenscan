import { graphql, useFragment } from "react-relay";
import { Square2StackIcon } from "@heroicons/react/24/outline";

import { LinkRef } from "components/modules/LinkRef";
import { CopyAddressTooltip, TooltipWrapper } from "components/modules/Tooltip";
import { AccountsTableRowFragment_account$key } from "libs/types/__generated__/AccountsTableRowFragment_account.graphql";
import { truncateSmart } from "libs/format";
import * as paths from "libs/paths";
import { AccountStorageModelBadge } from "components/modules/Badges";

const AccountsTableRowFragment_account_GRAPHQL = graphql`
  fragment AccountsTableRowFragment_account on Account {
    id
    account_id
    is_private
    block_number
  }
`;
export function AccountsTableRow({
  accountsKey,
}: {
  accountsKey: AccountsTableRowFragment_account$key;
}) {
  const account = useFragment(
    AccountsTableRowFragment_account_GRAPHQL,
    accountsKey
  );

  return (
    <tr key={account.id}>
      <td className="whitespace-nowrap py-2 pl-4 pr-3 sm:pl-6 text-xs font-medium text-blue-800 dark:text-blue-400 font-mono">
        <div className="flex items-center gap-x-1">
          <LinkRef
            href={paths.account(account.account_id)}
            className="hover:underline"
          >
            <TooltipWrapper message={account.account_id}>
              {truncateSmart(account.account_id)}
            </TooltipWrapper>
          </LinkRef>
          {account.account_id ? (
            <CopyAddressTooltip
              address={account.account_id}
              offsetOptions={{ offset: [0, 7] }}
            >
              <Square2StackIcon className="h-5 w-4 text-gray-900 dark:text-white cursor-pointer" />
            </CopyAddressTooltip>
          ) : null}
        </div>
      </td>
      <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900 dark:text-white">
        <AccountStorageModelBadge
          accountStorageModelType={account.is_private ? "Private" : "Public"}
        />
      </td>
      <td className="whitespace-nowrap px-2 py-2 text-xs text-blue-800 dark:text-blue-400 font-mono">
        <LinkRef
          href={paths.block(account.block_number)}
          className="hover:underline"
        >
          {account.block_number}
        </LinkRef>
      </td>
    </tr>
  );
}
