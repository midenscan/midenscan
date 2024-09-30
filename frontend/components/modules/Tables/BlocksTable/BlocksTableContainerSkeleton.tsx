import { useState } from "react";

import { OrderBy } from "libs/types";
import { BlocksTableContainer } from "./BlocksTableContainer";

export function BlocksTableContainerSkeleton() {
  const [orderBy, setOrderBy] = useState<OrderBy>("desc");

  return (
    <BlocksTableContainer
      blocksData={null}
      isLoadingNext={true}
      loadNext={() => {}}
      hasNext={false}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
    />
  );
}
