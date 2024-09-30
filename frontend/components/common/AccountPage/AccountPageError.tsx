import { ErrorPage } from "components/modules/ErrorPage";
import { isAccountDoesNotExistError } from "libs/errors";
import * as constants from "libs/constants";

export function AccountPageError({ error }: { error: Error }) {
  if (isAccountDoesNotExistError(error)) {
    return <ErrorPage errorMsg="Account does not exist" />;
  }
  return <ErrorPage errorMsg={constants.ERROR_MESSAGE_DEFAULT} />;
}
