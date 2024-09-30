import { ErrorPage } from "components/modules/ErrorPage";
import { isTransactionDoesNotExistError } from "libs/errors";
import * as constants from "libs/constants";

export function TransactionPageError({ error }: { error: Error }) {
  if (isTransactionDoesNotExistError(error)) {
    return <ErrorPage errorMsg="Transaction does not exist" />;
  }
  return <ErrorPage errorMsg={constants.ERROR_MESSAGE_DEFAULT} />;
}
