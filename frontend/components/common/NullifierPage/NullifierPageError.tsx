import { ErrorPage } from "components/modules/ErrorPage";
import { isNullifierDoesNotExistError } from "libs/errors";
import * as constants from "libs/constants";

export function NullifierPageError({ error }: { error: Error }) {
  if (isNullifierDoesNotExistError(error)) {
    return <ErrorPage errorMsg="Nullifier does not exist" />;
  }
  return <ErrorPage errorMsg={constants.ERROR_MESSAGE_DEFAULT} />;
}
