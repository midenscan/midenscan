import React from "react";

import { NotesTable, TableHeader } from "components/modules/Tables";
import { TableContainer } from "components/modules/TableContainer";
import * as tooltipMessages from "libs/tooltipMessages";

export function NotesPage() {
  return (
    <TableContainer>
      <TableHeader
        title="Notes"
        description={tooltipMessages.NOTES_PAGE_DESCRIPTION}
      />
      <NotesTable />
    </TableContainer>
  );
}
