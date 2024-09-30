import React from "react";

import { TransactionsPage } from "components/common/TransactionsPage";
import { PageMetaTagWrapper } from "components/modules/PageMetaTagWrapper";

function Transactions() {
  return (
    <PageMetaTagWrapper title={`Transactions`}>
      <TransactionsPage />
    </PageMetaTagWrapper>
  );
}

export default Transactions;
