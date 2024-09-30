import { ErrorPage } from "components/modules/ErrorPage";
import { isNoteDoesNotExistError } from "libs/errors";
import * as constants from "libs/constants";

export function NotePageError({ error }: { error: Error }) {
  if (isNoteDoesNotExistError(error)) {
    return <ErrorPage errorMsg="Note does not exist" />;
  }
  return <ErrorPage errorMsg={constants.ERROR_MESSAGE_DEFAULT} />;
}
