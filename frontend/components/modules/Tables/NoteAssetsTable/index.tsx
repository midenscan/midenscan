import { graphql, useLazyLoadQuery, usePaginationFragment } from "react-relay";

import { ErrorBoundaryWithFallback } from "components/modules/ErrorBoundaryWithFallback";

import { NoteAssetsTableError } from "./NoteAssetsTableError";
import { NoteAssetsTableContainer } from "./NoteAssetsTableContainer";
import { NoteAssetsTableQuery } from "libs/types/__generated__/NoteAssetsTableQuery.graphql";
import { DEFAULT_NUMBER_OF_ROWS } from "components/modules/Tables/Tables.constants";
import { NoteAssetsTablePaginationFragment_noteAssets$key } from "libs/types/__generated__/NoteAssetsTablePaginationFragment_noteAssets.graphql";
import { NoteAssetsTableContainerSkeleton } from "./NoteAssetsTableContainerSkeleton";
import { SsrSuspense } from "components/modules/SsrSuspense";

export const NOTE_ASSETS_TABLE_NUMBER_ROWS_PER = DEFAULT_NUMBER_OF_ROWS;
export const NOTE_ASSETS_TABLE_NUMBER_OF_COLUMNS = 3;

const NoteAssetsTableQueryGRAPHQL = graphql`
  query NoteAssetsTableQuery(
    $first: Int!
    $after: String
    $input: NoteAssetsInput!
  ) {
    ...NoteAssetsTablePaginationFragment_noteAssets
      @arguments(first: $first, after: $after, input: $input)
  }
`;
const NoteAssetsTablePaginationFragmentGRAPHQL = graphql`
  fragment NoteAssetsTablePaginationFragment_noteAssets on Query
  @refetchable(queryName: "NoteAssetsTablePaginationFragment")
  @argumentDefinitions(
    first: { type: "Int!" }
    after: { type: "String" }
    input: { type: "NoteAssetsInput!" }
  ) {
    noteAssets(first: $first, after: $after, input: $input)
      @connection(key: "NoteAssetsTablePaginationFragment_noteAssets") {
      edges {
        node {
          id
          ...NoteAssetsTableRowFragment_noteAsset
        }
      }
    }
  }
`;
function NoteAssetsTableInner({ note_id }: { note_id: string }) {
  const noteAssetsTableData = useLazyLoadQuery<NoteAssetsTableQuery>(
    NoteAssetsTableQueryGRAPHQL,
    {
      first: NOTE_ASSETS_TABLE_NUMBER_ROWS_PER,
      input: {
        note_id: note_id,
      },
    }
  );
  const { data, isLoadingNext, loadNext, hasNext } = usePaginationFragment<
    NoteAssetsTableQuery,
    NoteAssetsTablePaginationFragment_noteAssets$key
  >(NoteAssetsTablePaginationFragmentGRAPHQL, noteAssetsTableData);

  return (
    <NoteAssetsTableContainer
      noteAssetsData={data}
      isLoadingNext={isLoadingNext}
      loadNext={() => loadNext(NOTE_ASSETS_TABLE_NUMBER_ROWS_PER)}
      hasNext={hasNext}
    />
  );
}

export function NoteAssetsTable({ note_id }: { note_id: string }) {
  return (
    <ErrorBoundaryWithFallback
      renderFallbackComponent={(error: Error) => (
        <NoteAssetsTableError error={error} />
      )}
    >
      <div className="flex flex-col gap-y-3">
        <SsrSuspense fallback={<NoteAssetsTableContainerSkeleton />}>
          <NoteAssetsTableInner note_id={note_id} />
        </SsrSuspense>
      </div>
    </ErrorBoundaryWithFallback>
  );
}
