import { ErrorPage } from "components/modules/ErrorPage";
import * as constants from "libs/constants";

export function NoteAssetsTableError({ error }: { error: Error }) {
  return <ErrorPage errorMsg={constants.ERROR_MESSAGE_DEFAULT} />;
}
