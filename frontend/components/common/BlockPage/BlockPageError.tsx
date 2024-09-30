import { ErrorPage } from "components/modules/ErrorPage";
import { isBlockDoesNotExistError } from "libs/errors";
import * as constants from "libs/constants";

export function BlockPageError({ error }: { error: Error }) {
  if (isBlockDoesNotExistError(error)) {
    return <ErrorPage errorMsg="Block does not exist" />;
  }
  return <ErrorPage errorMsg={constants.ERROR_MESSAGE_DEFAULT} />;
}
