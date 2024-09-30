import { useState } from "react";

import { OrderBy } from "libs/types";
import { NotesTableContainer } from "./NotesTableContainer";

export function NotesTableContainerSkeleton() {
  const [orderBy, setOrderBy] = useState<OrderBy>("desc");

  return (
    <NotesTableContainer
      notesData={null}
      isLoadingNext={true}
      loadNext={() => {}}
      hasNext={false}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
    />
  );
}
