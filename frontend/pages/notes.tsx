import React from "react";

import { NotesPage } from "components/common/NotesPage";
import { PageMetaTagWrapper } from "components/modules/PageMetaTagWrapper";

function Notes() {
  return (
    <PageMetaTagWrapper title={`Notes`}>
      <NotesPage />
    </PageMetaTagWrapper>
  );
}

export default Notes;
