import { graphql, useLazyLoadQuery } from "react-relay";

import { NotePageQuery } from "libs/types/__generated__/NotePageQuery.graphql";
import { useDetailsTabState } from "components/modules/DetailsTab";
import { ErrorBoundaryWithFallback } from "components/modules/ErrorBoundaryWithFallback";
import { SsrSuspense } from "components/modules/SsrSuspense";
import { NotePageContainer } from "./NotePageContainer";
import { NotePageError } from "./NotePageError";
import { NotePageSkeleton } from "./NotePageSkeleton";
import { NotePageTabs } from "./NotePageTabs";

const NotePageQueryGRAPHQL = graphql`
  query NotePageQuery($input: NoteInput!) {
    note(input: $input) {
      note_id
      note_type
      ...NotePageOverviewTabFragment_note
      ...NotePageScriptTabFragment_note
    }
  }
`;
function NotePageInner({ noteId }: { noteId: string }) {
  const [selectedTab, setSelectedTab] = useDetailsTabState();
  const noteData = useLazyLoadQuery<NotePageQuery>(NotePageQueryGRAPHQL, {
    input: {
      note_id: noteId,
    },
  });

  return (
    <NotePageContainer
      selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}
      noteType={noteData.note.note_type}
    >
      <NotePageTabs selectedTab={selectedTab} noteData={noteData} />
    </NotePageContainer>
  );
}

export function NotePage({
  noteId,
  loading,
}: {
  noteId: Nullable<string>;
  loading: boolean;
}) {
  if (loading) {
    return <NotePageSkeleton />;
  }

  if (noteId === null) {
    return <NotePageError error={new Error("Note does not exist")} />;
  }

  return (
    <ErrorBoundaryWithFallback
      renderFallbackComponent={(error: Error) => (
        <NotePageError error={error} />
      )}
    >
      <SsrSuspense fallback={<NotePageSkeleton />}>
        <NotePageInner noteId={noteId} />
      </SsrSuspense>
    </ErrorBoundaryWithFallback>
  );
}
