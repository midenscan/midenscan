import React from "react";
import { useRouter } from "next/router";

import { getHexStringOrNull, truncateHexString } from "libs/format";
import { NullifierPage } from "components/common/NullifierPage";
import { PageMetaTagWrapper } from "components/modules/PageMetaTagWrapper";

function Nullifier() {
  const router = useRouter();
  const nullifier = getHexStringOrNull(router.query.nullifier);
  const truncatedNullifier = nullifier ? truncateHexString(nullifier) : "";

  return (
    <PageMetaTagWrapper title={`Nullifier ${truncatedNullifier}`}>
      <NullifierPage nullifier={nullifier} loading={!router.isReady} />
    </PageMetaTagWrapper>
  );
}

export default Nullifier;
