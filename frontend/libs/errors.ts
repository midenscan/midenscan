function getErrorDetails(err: any): {
  errMsg: Nullable<string>;
  errCode: Nullable<string>;
  errStatus: Nullable<number>;
} {
  const errMsg = err?.response?.data?.message ?? err?.message;
  const errCode = err?.response?.data?.code ?? err?.code ?? err?.errorCode;
  const errStatus = err?.response?.status;

  return {
    errMsg: errMsg ? String(errMsg) : null,
    errCode: errCode ? String(errCode) : null,
    errStatus: errStatus,
  };
}

export function isBlockDoesNotExistError(err: unknown) {
  const { errMsg } = getErrorDetails(err);
  return !!errMsg?.toLowerCase().includes("block does not exist".toLowerCase());
}

export function isAccountDoesNotExistError(err: unknown) {
  const { errMsg } = getErrorDetails(err);
  return !!errMsg
    ?.toLowerCase()
    .includes("account does not exist".toLowerCase());
}

export function isTransactionDoesNotExistError(err: unknown) {
  const { errMsg } = getErrorDetails(err);
  return !!errMsg
    ?.toLowerCase()
    .includes("transaction does not exist".toLowerCase());
}

export function isNoteDoesNotExistError(err: unknown) {
  const { errMsg } = getErrorDetails(err);
  return !!errMsg?.toLowerCase().includes("note does not exist".toLowerCase());
}

export function isNullifierDoesNotExistError(err: unknown) {
  const { errMsg } = getErrorDetails(err);
  return !!errMsg
    ?.toLowerCase()
    .includes("nullifier does not exist".toLowerCase());
}
