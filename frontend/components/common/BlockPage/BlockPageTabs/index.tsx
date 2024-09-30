import { TabOption } from "components/modules/DetailsTab";
import { BlockPageQuery$data } from "libs/types/__generated__/BlockPageQuery.graphql";
import { BlockPageOverviewTab } from "./BlockPageOverviewTab";
import {
  NotesTable,
  AccountUpdatesTable,
  TransactionsTable,
} from "components/modules/Tables";

export function BlockPageTabs({
  selectedTab,
  blockData,
}: {
  selectedTab: TabOption;
  blockData: BlockPageQuery$data;
}) {
  const block = blockData.block;

  switch (selectedTab) {
    case TabOption.OVERVIEW: {
      return <BlockPageOverviewTab blockKey={block} />;
    }
    case TabOption.ACCOUNT_UPDATES: {
      return <AccountUpdatesTable block_hash={block.block_hash} />;
    }
    case TabOption.TRANSACTIONS: {
      return <TransactionsTable block_hash={block.block_hash} />;
    }
    case TabOption.CREATED_NOTES: {
      return <NotesTable block_hash={block.block_hash} />;
    }
  }

  return null;
}
