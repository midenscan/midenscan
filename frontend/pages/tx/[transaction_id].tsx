import React from "react";
import { useRouter } from "next/router";
import { getHexStringOrNull, truncateHexString } from "libs/format";
import { PageMetaTagWrapper } from "components/modules/PageMetaTagWrapper";
import { TransactionPage } from "components/common/TransactionPage";

function Transaction() {
  const router = useRouter();
  const transactionId = getHexStringOrNull(router.query.transaction_id);
  const truncatedTransactionId = transactionId
    ? truncateHexString(transactionId)
    : "";

  return (
    <PageMetaTagWrapper title={`Transaction ${truncatedTransactionId}`}>
      <TransactionPage
        transactionId={transactionId}
        loading={!router.isReady}
      />
    </PageMetaTagWrapper>
  );
}

export default Transaction;
