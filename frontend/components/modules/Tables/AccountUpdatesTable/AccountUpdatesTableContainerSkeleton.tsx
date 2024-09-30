import { useState } from "react";

import { OrderBy } from "libs/types";
import { AccountUpdatesTableContainer } from "./AccountUpdatesTableContainer";

export function AccountUpdatesTableContainerSkeleton() {
  const [orderBy, setOrderBy] = useState<OrderBy>("desc");

  return (
    <AccountUpdatesTableContainer
      accountUpdatesData={null}
      isLoadingNext={true}
      loadNext={() => {}}
      hasNext={false}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
    />
  );
}
