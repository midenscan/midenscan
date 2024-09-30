import { TabOption } from "components/modules/DetailsTab";
import { NotePageContainer } from "./NotePageContainer";
import { NotePageOverviewTabSkeleton } from "./NotePageOverviewTabSkeleton";

export function NotePageSkeleton() {
  return (
    <NotePageContainer
      selectedTab={TabOption.OVERVIEW}
      setSelectedTab={() => {}}
      noteType={"Private"}
    >
      <NotePageOverviewTabSkeleton />
    </NotePageContainer>
  );
}
