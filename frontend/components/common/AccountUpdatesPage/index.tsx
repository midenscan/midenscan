import React from "react";

import { AccountUpdatesTable, TableHeader } from "components/modules/Tables";
import { TableContainer } from "components/modules/TableContainer";
import * as tooltipMessages from "libs/tooltipMessages";

export function AccountUpdatesPage() {
  return (
    <TableContainer>
      <TableHeader
        title="Account Updates"
        description={tooltipMessages.ACCOUNT_UPDATE_PAGE_DESCRIPTION}
      />
      <AccountUpdatesTable />
    </TableContainer>
  );
}
