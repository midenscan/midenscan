import { useState } from "react";
import { graphql, useLazyLoadQuery, usePaginationFragment } from "react-relay";

import { OrderBy } from "libs/types";
import { ErrorBoundaryWithFallback } from "components/modules/ErrorBoundaryWithFallback";

import { NotesTableError } from "./NotesTableError";
import { NotesTableContainer } from "./NotesTableContainer";
import { NotesTableQuery } from "libs/types/__generated__/NotesTableQuery.graphql";
import { DEFAULT_NUMBER_OF_ROWS } from "components/modules/Tables/Tables.constants";
import { NotesTablePaginationFragment_notes$key } from "libs/types/__generated__/NotesTablePaginationFragment_notes.graphql";
import { NotesTableContainerSkeleton } from "./NotesTableContainerSkeleton";
import { SsrSuspense } from "components/modules/SsrSuspense";

export const NOTES_TABLE_NUMBER_ROWS_PER = DEFAULT_NUMBER_OF_ROWS;
export const NOTES_TABLE_NUMBER_OF_COLUMNS = 2;

const NotesTableQueryGRAPHQL = graphql`
  query NotesTableQuery($first: Int!, $after: String, $input: NotesInput!) {
    ...NotesTablePaginationFragment_notes
      @arguments(first: $first, after: $after, input: $input)
  }
`;
const NotesTablePaginationFragmentGRAPHQL = graphql`
  fragment NotesTablePaginationFragment_notes on Query
  @refetchable(queryName: "NotesTablePaginationFragment")
  @argumentDefinitions(
    first: { type: "Int!" }
    after: { type: "String" }
    input: { type: "NotesInput!" }
  ) {
    notes(first: $first, after: $after, input: $input)
      @connection(key: "NotesTablePaginationFragment_notes") {
      edges {
        node {
          id
          ...NotesTableRowFragment_note
        }
      }
    }
  }
`;
function NotesTableInner({
  block_hash,

  orderBy,
  setOrderBy,
}: {
  block_hash?: string;

  orderBy: OrderBy;
  setOrderBy: (orderBy: OrderBy) => void;
}) {
  const notesTableData = useLazyLoadQuery<NotesTableQuery>(
    NotesTableQueryGRAPHQL,
    {
      first: NOTES_TABLE_NUMBER_ROWS_PER,
      input: {
        block_hash: block_hash,
        sort_by: "commited_at",
        order_by: orderBy,
      },
    }
  );
  const { data, isLoadingNext, loadNext, hasNext } = usePaginationFragment<
    NotesTableQuery,
    NotesTablePaginationFragment_notes$key
  >(NotesTablePaginationFragmentGRAPHQL, notesTableData);

  return (
    <NotesTableContainer
      notesData={data}
      isLoadingNext={isLoadingNext}
      loadNext={() => loadNext(NOTES_TABLE_NUMBER_ROWS_PER)}
      hasNext={hasNext}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
    />
  );
}

export function NotesTable({ block_hash }: { block_hash?: string }) {
  const [orderBy, setOrderBy] = useState<OrderBy>("desc");

  return (
    <ErrorBoundaryWithFallback
      renderFallbackComponent={(error: Error) => (
        <NotesTableError error={error} />
      )}
    >
      <div className="flex flex-col gap-y-3">
        <SsrSuspense fallback={<NotesTableContainerSkeleton />}>
          <NotesTableInner
            block_hash={block_hash}
            orderBy={orderBy}
            setOrderBy={setOrderBy}
          />
        </SsrSuspense>
      </div>
    </ErrorBoundaryWithFallback>
  );
}
