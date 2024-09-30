import React from "react";

import { AccountUpdatesPage } from "components/common/AccountUpdatesPage";
import { PageMetaTagWrapper } from "components/modules/PageMetaTagWrapper";

function AccountUpdates() {
  return (
    <PageMetaTagWrapper title={`Account Updates`}>
      <AccountUpdatesPage />
    </PageMetaTagWrapper>
  );
}

export default AccountUpdates;
