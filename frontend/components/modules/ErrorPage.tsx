import React from "react";
import * as constants from "libs/constants";

export function ErrorPage({ errorMsg }: { errorMsg?: string }) {
  return (
    <div className="w-full text-center my-44">
      Error: {errorMsg ?? constants.ERROR_MESSAGE_DEFAULT}
    </div>
  );
}
