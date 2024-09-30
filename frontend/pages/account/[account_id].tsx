import React from "react";
import { useRouter } from "next/router";

import { getHexStringOrNull, truncateHexString } from "libs/format";
import { PageMetaTagWrapper } from "components/modules/PageMetaTagWrapper";
import { AccountPage } from "components/common/AccountPage";

function Account() {
  const router = useRouter();
  const accountId = getHexStringOrNull(router.query.account_id);
  const truncatedAccountId = accountId ? truncateHexString(accountId) : "";

  return (
    <PageMetaTagWrapper title={`Account ${truncatedAccountId}`}>
      <AccountPage accountId={accountId} loading={!router.isReady} />
    </PageMetaTagWrapper>
  );
}

export default Account;
