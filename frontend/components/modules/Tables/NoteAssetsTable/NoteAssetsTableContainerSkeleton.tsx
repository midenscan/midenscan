import { NoteAssetsTableContainer } from "./NoteAssetsTableContainer";

export function NoteAssetsTableContainerSkeleton() {
  return (
    <NoteAssetsTableContainer
      noteAssetsData={null}
      isLoadingNext={true}
      loadNext={() => {}}
      hasNext={false}
    />
  );
}
