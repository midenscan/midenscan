import React from "react";
import { useRouter } from "next/router";

import {
  getBigIntOrNull,
  getHexStringOrNull,
  truncateHexString,
} from "libs/format";
import { isNullOrUndefined } from "libs/check";
import { PageMetaTagWrapper } from "components/modules/PageMetaTagWrapper";
import { BlockPage } from "components/common/BlockPage";

function getBlockIdentifier(value: unknown): Nullable<{
  blockIdentifier: string;
  blockIdentifierDisplay: string;
}> {
  const blockIdentifierByHexString = getHexStringOrNull(value as string);
  if (
    !isNullOrUndefined(blockIdentifierByHexString) &&
    blockIdentifierByHexString !== null
  ) {
    return {
      blockIdentifier: blockIdentifierByHexString,
      blockIdentifierDisplay: blockIdentifierByHexString
        ? truncateHexString(blockIdentifierByHexString)
        : "",
    };
  }

  const blockIdentifierByNumber = getBigIntOrNull(value);
  if (
    !isNullOrUndefined(blockIdentifierByNumber) &&
    blockIdentifierByNumber !== null
  ) {
    return {
      blockIdentifier: blockIdentifierByNumber.toString(),
      blockIdentifierDisplay: blockIdentifierByNumber.toString(),
    };
  }

  return null;
}

function Block() {
  const router = useRouter();
  const blockIdentifierRes = getBlockIdentifier(router.query.block_identifier);
  const blockIdentifier = blockIdentifierRes?.blockIdentifier ?? null;
  const blockIdentifierDisplay =
    blockIdentifierRes?.blockIdentifierDisplay ?? "";

  return (
    <PageMetaTagWrapper title={`Block ${blockIdentifierDisplay}`}>
      <BlockPage blockIdentifier={blockIdentifier} loading={!router.isReady} />
    </PageMetaTagWrapper>
  );
}

export default Block;
