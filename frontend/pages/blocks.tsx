import React from "react";

import { BlocksPage } from "components/common/BlocksPage";
import { PageMetaTagWrapper } from "components/modules/PageMetaTagWrapper";

function Blocks() {
  return (
    <PageMetaTagWrapper
      title={`Blocks`}
    >
      <BlocksPage />
    </PageMetaTagWrapper>
  )
}

export default Blocks;