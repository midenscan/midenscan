import React from "react";

import { AccountsTable, TableHeader } from "components/modules/Tables";
import { TableContainer } from "components/modules/TableContainer";
import * as tooltipMessages from "libs/tooltipMessages";

export function AccountsPage() {
  return (
    <TableContainer>
      <TableHeader title="Accounts" description={tooltipMessages.ACCOUNTS} />
      <AccountsTable />
    </TableContainer>
  );
}
