import { useState } from "react";

import { OrderBy } from "libs/types";
import { TransactionsTableContainer } from "./TransactionsTableContainer";

export function TransactionsTableContainerSkeleton() {
  const [orderBy, setOrderBy] = useState<OrderBy>("desc");

  return (
    <TransactionsTableContainer
      transactionsData={null}
      isLoadingNext={true}
      loadNext={() => {}}
      hasNext={false}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
    />
  );
}
