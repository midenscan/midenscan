import React from "react";

import { DetailsContainer } from "components/modules/DetailsContainer";
import { DetailsTabs, TabOption } from "components/modules/DetailsTab";
import { TabContainer } from "components/modules/TabContainer";
import * as tooltipMessages from "libs/tooltipMessages";
import { MidenNoteType } from "libs/types";

type NotePageContainerProps = {
  selectedTab: TabOption;
  setSelectedTab: (tabOption: TabOption) => void;
  noteType: MidenNoteType;
  children: React.ReactNode;
};
export function NotePageContainer({
  selectedTab,
  setSelectedTab,
  noteType,
  children,
}: NotePageContainerProps) {
  const detailsTab = [
    {
      option: TabOption.OVERVIEW,
      displayName: "Overview",
      displayCount: null,
      displayIsVerified: null,
    },
  ];
  if (noteType === "Public") {
    detailsTab.push({
      option: TabOption.NOTE_ASSETS,
      displayName: "Assets",
      displayCount: null,
      displayIsVerified: null,
    });
    detailsTab.push({
      option: TabOption.NOTE_SCRIPT,
      displayName: "Script",
      displayCount: null,
      displayIsVerified: null,
    });
  }

  return (
    <DetailsContainer
      title="Note"
      description={tooltipMessages.NOTE_PAGE_DESCRIPTION}
    >
      <div className="px-4 sm:px-6">
        <DetailsTabs
          tabOptions={detailsTab}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </div>
      <TabContainer>{children}</TabContainer>
    </DetailsContainer>
  );
}
