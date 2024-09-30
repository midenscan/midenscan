import { useState } from "react";

import { OrderBy } from "libs/types";
import { AccountsTableContainer } from "./AccountsTableContainer";

export function AccountsTableContainerSkeleton() {
  const [orderBy, setOrderBy] = useState<OrderBy>("desc");

  return (
    <AccountsTableContainer
      accountsData={null}
      isLoadingNext={true}
      loadNext={() => {}}
      hasNext={false}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
    />
  );
}
