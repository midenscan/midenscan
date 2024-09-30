import React from "react";
import { useRouter } from "next/router";

import { getHexStringOrNull, truncateHexString } from "libs/format";
import { PageMetaTagWrapper } from "components/modules/PageMetaTagWrapper";
import { NotePage } from "components/common/NotePage";

function Note() {
  const router = useRouter();
  const noteId = getHexStringOrNull(router.query.note_id);
  const truncatedNoteId = noteId ? truncateHexString(noteId) : "";

  return (
    <PageMetaTagWrapper title={`Note ${truncatedNoteId}`}>
      <NotePage noteId={noteId} loading={!router.isReady} />
    </PageMetaTagWrapper>
  );
}

export default Note;
