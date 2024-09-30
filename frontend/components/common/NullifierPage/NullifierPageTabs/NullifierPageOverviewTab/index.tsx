import React from "react";
import { graphql, useFragment } from "react-relay";

import { HashItem, BlockNumberItem } from "components/modules/Overview";
import { NullifierPageOverviewTabFragment_nullifier$key } from "libs/types/__generated__/NullifierPageOverviewTabFragment_nullifier.graphql";
import * as tooltipMessages from "libs/tooltipMessages";
import * as paths from "libs/paths";

const NullifierPageOverviewTabFragmentGRAPHQL = graphql`
  fragment NullifierPageOverviewTabFragment_nullifier on Nullifier {
    nullifier
    block_number
    note {
      note_id
    }
  }
`;

export function NullifierPageOverviewTab({
  nullifierKey,
}: {
  nullifierKey: NullifierPageOverviewTabFragment_nullifier$key;
}) {
  const nullifier = useFragment(
    NullifierPageOverviewTabFragmentGRAPHQL,
    nullifierKey
  );

  return (
    <dl className="sm:divide-y sm:divide-gray-200 dark:sm:divide-gray-600">
      <HashItem
        title="Nullifier"
        titleTooltipMsg={tooltipMessages.NULLIFIER}
        hash={nullifier.nullifier}
        href={paths.nullifier(nullifier.nullifier)}
      />
      <BlockNumberItem blockNumber={nullifier.block_number} />
      {nullifier.note ? (
        <HashItem
          title="Note ID"
          titleTooltipMsg={"The note of the nullifier"}
          hash={nullifier.note.note_id}
          href={paths.note(nullifier.note.note_id)}
        />
      ) : null}
    </dl>
  );
}
