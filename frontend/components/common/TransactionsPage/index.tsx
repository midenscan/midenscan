import React from "react";

import { TransactionsTable, TableHeader } from "components/modules/Tables";
import { TableContainer } from "components/modules/TableContainer";
import * as tooltipMessages from "libs/tooltipMessages";

export function TransactionsPage() {
  return (
    <TableContainer>
      <TableHeader
        title="Transactions"
        description={tooltipMessages.TRANSACTION}
      />
      <TransactionsTable />
    </TableContainer>
  );
}
