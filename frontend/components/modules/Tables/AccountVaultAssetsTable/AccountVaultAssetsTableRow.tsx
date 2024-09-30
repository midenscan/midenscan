import { graphql, useFragment } from "react-relay";
import { Square2StackIcon } from "@heroicons/react/24/outline";

import { LinkRef } from "components/modules/LinkRef";
import { CopyAddressTooltip, TooltipWrapper } from "components/modules/Tooltip";
import { AccountVaultAssetsTableRowFragment_accountVaultAsset$key } from "libs/types/__generated__/AccountVaultAssetsTableRowFragment_accountVaultAsset.graphql";
import { truncateSmart } from "libs/format";
import * as paths from "libs/paths";

const AccountVaultAssetsTableRowFragment_accountVaultAsset_GRAPHQL = graphql`
  fragment AccountVaultAssetsTableRowFragment_accountVaultAsset on AccountVaultAsset {
    id
    faucet_id
    account_id
    amount
  }
`;
export function AccountVaultAssetsTableRow({
  accountVaultAssetKey,
}: {
  accountVaultAssetKey: AccountVaultAssetsTableRowFragment_accountVaultAsset$key;
}) {
  const accountVaultAsset = useFragment(
    AccountVaultAssetsTableRowFragment_accountVaultAsset_GRAPHQL,
    accountVaultAssetKey
  );

  return (
    <tr key={accountVaultAsset.id}>
      <td className="whitespace-nowrap pl-4 sm:pl-6 pr-3 pb-2 pt-2.5 text-xs font-medium text-blue-800 dark:text-blue-400 font-mono">
        <div className="flex items-center gap-x-1">
          <LinkRef
            href={paths.account(accountVaultAsset.faucet_id)}
            className="hover:underline"
          >
            <TooltipWrapper message={accountVaultAsset.faucet_id}>
              {truncateSmart(accountVaultAsset.faucet_id)}
            </TooltipWrapper>
          </LinkRef>
          {accountVaultAsset.faucet_id ? (
            <CopyAddressTooltip
              address={accountVaultAsset.faucet_id}
              offsetOptions={{ offset: [0, 7] }}
            >
              <Square2StackIcon className="h-5 w-4 text-gray-900 dark:text-white cursor-pointer" />
            </CopyAddressTooltip>
          ) : null}
        </div>
      </td>
      <td className="whitespace-nowrap px-2 pb-2 pt-2.5 text-xs font-medium text-blue-800 dark:text-blue-400 font-mono">
        <div className="flex items-center gap-x-1">
          <LinkRef
            href={paths.account(accountVaultAsset.account_id)}
            className="hover:underline"
          >
            <TooltipWrapper message={accountVaultAsset.account_id}>
              {truncateSmart(accountVaultAsset.account_id)}
            </TooltipWrapper>
          </LinkRef>
          {accountVaultAsset.account_id ? (
            <CopyAddressTooltip
              address={accountVaultAsset.account_id}
              offsetOptions={{ offset: [0, 7] }}
            >
              <Square2StackIcon className="h-5 w-4 text-gray-900 dark:text-white cursor-pointer" />
            </CopyAddressTooltip>
          ) : null}
        </div>
      </td>
      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500 dark:text-white">
        <div className="w-fit">{accountVaultAsset.amount}</div>
      </td>
    </tr>
  );
}
