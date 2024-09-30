import React from "react";

import { AccountsPage } from "components/common/AccountsPage";
import { PageMetaTagWrapper } from "components/modules/PageMetaTagWrapper";

function Accounts() {
  return (
    <PageMetaTagWrapper title={`Accounts`}>
      <AccountsPage />
    </PageMetaTagWrapper>
  );
}

export default Accounts;
