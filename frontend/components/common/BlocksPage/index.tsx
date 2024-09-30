import React from "react";

import { BlocksTable, TableHeader } from "components/modules/Tables";
import { TableContainer } from "components/modules/TableContainer";
import * as tooltipMessages from "libs/tooltipMessages";

export function BlocksPage() {
  return (
    <TableContainer>
      <TableHeader
        title="Blocks"
        description={tooltipMessages.BLOCKS_PAGE_DESCRIPTION}
      />
      <BlocksTable />
    </TableContainer>
  );
}
