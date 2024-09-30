import { graphql, useFragment } from "react-relay";
import { Square2StackIcon } from "@heroicons/react/24/outline";

import { LinkRef } from "components/modules/LinkRef";
import { CopyAddressTooltip, TooltipWrapper } from "components/modules/Tooltip";
import { AccountUpdatesTableRowFragment_accountUpdate$key } from "libs/types/__generated__/AccountUpdatesTableRowFragment_accountUpdate.graphql";
import { truncateSmart } from "libs/format";
import * as paths from "libs/paths";
import { AccountStorageModelBadge } from "components/modules/Badges";

const AccountUpdatesTableRowFragment_accountUpdate_GRAPHQL = graphql`
  fragment AccountUpdatesTableRowFragment_accountUpdate on AccountUpdate {
    id
    account_id
    state_hash
    nonce
    block_number

    account {
      is_private
    }
  }
`;
export function AccountUpdatesTableRow({
  accountUpdatesKey,
}: {
  accountUpdatesKey: AccountUpdatesTableRowFragment_accountUpdate$key;
}) {
  const accountUpdate = useFragment(
    AccountUpdatesTableRowFragment_accountUpdate_GRAPHQL,
    accountUpdatesKey
  );

  return (
    <tr key={accountUpdate.id}>
      <td className="whitespace-nowrap py-2 pl-4 pr-3 sm:pl-6 text-xs font-medium text-blue-800 dark:text-blue-400 font-mono">
        <div className="flex items-center gap-x-1">
          <LinkRef
            href={paths.account(accountUpdate.account_id)}
            className="hover:underline"
          >
            <TooltipWrapper message={accountUpdate.account_id}>
              {truncateSmart(accountUpdate.account_id)}
            </TooltipWrapper>
          </LinkRef>
          {accountUpdate.account_id ? (
            <CopyAddressTooltip
              address={accountUpdate.account_id}
              offsetOptions={{ offset: [0, 7] }}
            >
              <Square2StackIcon className="h-5 w-4 text-gray-900 dark:text-white cursor-pointer" />
            </CopyAddressTooltip>
          ) : null}
        </div>
      </td>
      <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900 dark:text-white">
        <AccountStorageModelBadge
          accountStorageModelType={
            accountUpdate.account.is_private ? "Private" : "Public"
          }
        />
      </td>
      <td className="whitespace-nowrap px-2 pb-2 pt-2.5 text-xs font-medium text-blue-800 dark:text-blue-400 font-mono">
        <div className="flex items-center gap-x-1">
          <TooltipWrapper message={accountUpdate.state_hash ?? ""}>
            {truncateSmart(accountUpdate.state_hash ?? "-")}
          </TooltipWrapper>
          {accountUpdate.state_hash ? (
            <CopyAddressTooltip
              address={accountUpdate.state_hash}
              offsetOptions={{ offset: [0, 7] }}
            >
              <Square2StackIcon className="h-5 w-4 text-gray-900 dark:text-white cursor-pointer" />
            </CopyAddressTooltip>
          ) : null}
        </div>
      </td>
      <td className="whitespace-nowrap px-2 py-2 text-xs text-gray-500 dark:text-white">
        <div className="w-fit">{accountUpdate.nonce ?? "-"}</div>
      </td>
      <td className="whitespace-nowrap px-2 py-2 text-xs text-blue-800 dark:text-blue-400 font-mono">
        <LinkRef
          href={paths.block(accountUpdate.block_number)}
          className="hover:underline"
        >
          {accountUpdate.block_number}
        </LinkRef>
      </td>
    </tr>
  );
}
