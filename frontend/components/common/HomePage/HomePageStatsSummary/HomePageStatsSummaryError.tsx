import { ErrorPage } from "components/modules/ErrorPage";
import * as constants from "libs/constants";

export function HomePageStatsSummaryError() {
  return <ErrorPage errorMsg={constants.ERROR_MESSAGE_DEFAULT} />;
}
