import { TabOption } from "components/modules/DetailsTab";
import { NoteAssetsTable } from "components/modules/Tables";
import { NotePageQuery$data } from "libs/types/__generated__/NotePageQuery.graphql";
import { NotePageOverviewTab } from "./NotePageOverviewTab";
import { NotePageScriptTab } from "./NotePageScriptTab";

export function NotePageTabs({
  selectedTab,
  noteData,
}: {
  selectedTab: TabOption;
  noteData: NotePageQuery$data;
}) {
  const note = noteData.note;

  switch (selectedTab) {
    case TabOption.OVERVIEW: {
      return <NotePageOverviewTab noteKey={note} />;
    }
    case TabOption.NOTE_ASSETS: {
      return <NoteAssetsTable note_id={note.note_id} />;
    }
    case TabOption.NOTE_SCRIPT: {
      return <NotePageScriptTab noteKey={note} />;
    }
  }

  return null;
}
