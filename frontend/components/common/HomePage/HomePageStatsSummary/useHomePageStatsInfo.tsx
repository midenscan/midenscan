import { graphql, useFragment } from "react-relay";
import {
  CubeIcon,
  UserPlusIcon,
  ClipboardDocumentCheckIcon,
  DocumentIcon,
  DocumentCheckIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

import { toNumberWithCommas } from "libs/format";
import * as paths from "libs/paths";
import { useHomePageStatsInfoFragment_overviewStats$key } from "libs/types/__generated__/useHomePageStatsInfoFragment_overviewStats.graphql";

const useHomePageStatsInfoFragmentGRAPHQL = graphql`
  fragment useHomePageStatsInfoFragment_overviewStats on OverviewStats {
    total_count_blocks
    total_count_transactions
    total_count_accounts
    total_count_account_updates
    total_count_notes
    total_count_nullifiers
  }
`;
export function useHomePageStatsInfo(
  overviewStatsKey: Nullable<useHomePageStatsInfoFragment_overviewStats$key>
) {
  const overviewStats = useFragment(
    useHomePageStatsInfoFragmentGRAPHQL,
    overviewStatsKey
  );

  let displayNumberOfBlocks = null;
  let displayNumberOfTransactions = null;
  let displayNumberOfAccounts = null;
  let displayNumberOfAccountUpdates = null;
  let displayNumberOfCreatedNotes = null;
  let displayNumberOfNullifiers = null;
  if (overviewStats) {
    displayNumberOfBlocks = toNumberWithCommas(
      overviewStats.total_count_blocks
    );
    displayNumberOfTransactions = toNumberWithCommas(
      overviewStats.total_count_transactions
    );
    displayNumberOfAccounts = toNumberWithCommas(
      overviewStats.total_count_accounts
    );
    displayNumberOfAccountUpdates = toNumberWithCommas(
      overviewStats.total_count_account_updates
    );
    displayNumberOfCreatedNotes = toNumberWithCommas(
      overviewStats.total_count_notes
    );
    displayNumberOfNullifiers = toNumberWithCommas(
      overviewStats.total_count_nullifiers
    );
  }

  return [
    {
      name: "Blocks",
      stat: displayNumberOfBlocks,
      icon: CubeIcon,
      href: paths.blocks,
    },
    {
      name: "Transactions",
      stat: displayNumberOfTransactions,
      icon: ClipboardDocumentCheckIcon,
      href: paths.transactions,
    },
    {
      name: "Accounts",
      stat: displayNumberOfAccounts,
      icon: UsersIcon,
      href: paths.accounts,
    },
    {
      name: "Account Updates",
      stat: displayNumberOfAccountUpdates,
      icon: UserPlusIcon,
      href: paths.account_updates,
    },
    {
      name: "Created Notes",
      stat: displayNumberOfCreatedNotes,
      icon: DocumentIcon,
      href: paths.notes,
    },
    {
      name: "Consumed Notes",
      stat: displayNumberOfNullifiers,
      icon: DocumentCheckIcon,
      href: paths.notes,
    },
  ];
}
