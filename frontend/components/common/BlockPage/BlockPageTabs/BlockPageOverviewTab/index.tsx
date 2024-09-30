import React from "react";
import { graphql, useFragment } from "react-relay";

import {
  HashItem,
  BlockHashItem,
  BlockNumberItem,
  HumanTimestampItem,
} from "components/modules/Overview";
import * as tooltipMessages from "libs/tooltipMessages";
import { BlockPageOverviewTabFragment_block$key } from "libs/types/__generated__/BlockPageOverviewTabFragment_block.graphql";

const BlockPageOverviewTabFragmentGRAPHQL = graphql`
  fragment BlockPageOverviewTabFragment_block on Block {
    block_hash
    block_number
    timestamp

    chain_root
    account_root
    nullifier_root
    note_root
    tx_hash
    proof_hash
  }
`;
export function BlockPageOverviewTab({
  blockKey,
}: {
  blockKey: BlockPageOverviewTabFragment_block$key;
}) {
  const block = useFragment(BlockPageOverviewTabFragmentGRAPHQL, blockKey);

  return (
    <dl className="sm:divide-y sm:divide-gray-200 dark:sm:divide-gray-600">
      <BlockHashItem blockHash={block.block_hash} />
      <BlockNumberItem blockNumber={block.block_number} />
      <HumanTimestampItem
        tooltipMessage={tooltipMessages.BLOCK_TIMESTAMP}
        timestamp={block.timestamp}
      />
      <HashItem
        title="Chain Root"
        titleTooltipMsg={tooltipMessages.CHAIN_ROOT}
        hash={block.chain_root}
      />
      <HashItem
        title="Account Root"
        titleTooltipMsg={tooltipMessages.ACCOUNT_ROOT}
        hash={block.account_root}
      />
      <HashItem
        title="Nullifier Root"
        titleTooltipMsg={tooltipMessages.NULLIFIER_ROOT}
        hash={block.nullifier_root}
      />
      <HashItem
        title="Note Root"
        titleTooltipMsg={tooltipMessages.NOTE_ROOT}
        hash={block.note_root}
      />
      <HashItem
        title="Transaction Hash"
        titleTooltipMsg={tooltipMessages.TX_HASH}
        hash={block.tx_hash}
      />
      <HashItem
        title="Proof Hash"
        titleTooltipMsg={tooltipMessages.PROOF_HASH}
        hash={block.proof_hash}
      />
    </dl>
  );
}
