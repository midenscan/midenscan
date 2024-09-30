import { graphql, useLazyLoadQuery } from "react-relay";

import { ErrorBoundaryWithFallback } from "components/modules/ErrorBoundaryWithFallback";
import { SsrSuspense } from "components/modules/SsrSuspense";
import { TransactionsTableMiniQuery } from "libs/types/__generated__/TransactionsTableMiniQuery.graphql";
import { TransactionsTableMiniContainer } from "./TransactionsTableMiniContainer";
import { TransactionsTableMiniContainerSkeleton } from "./TransactionsTableMiniContainerSkeleton";
import { TransactionsTableMiniError } from "./TransactionsTableMiniError";

export const TRANSACTIONS_TABLE_MINI_NUMBER_ROWS_PER = 15;

const TransactionsTableMiniQueryGRAPHQL = graphql`
  query TransactionsTableMiniQuery(
    $first: Int!
    $after: String
    $input: TransactionsInput!
  ) {
    transactions(first: $first, after: $after, input: $input) {
      edges {
        node {
          id
          ...TransactionsTableMiniRowFragment_transaction
        }
      }
    }
  }
`;
export function TransactionsTableMiniInner() {
  const transactionsTableMiniData =
    useLazyLoadQuery<TransactionsTableMiniQuery>(
      TransactionsTableMiniQueryGRAPHQL,
      {
        first: TRANSACTIONS_TABLE_MINI_NUMBER_ROWS_PER,
        input: {
          sort_by: "commited_at",
          order_by: "desc",
        },
      }
    );
  return (
    <TransactionsTableMiniContainer
      transactionsData={transactionsTableMiniData}
      isLoading={false}
    />
  );
}

export function TransactionsTableMini() {
  return (
    <ErrorBoundaryWithFallback
      renderFallbackComponent={(error: Error) => <TransactionsTableMiniError />}
    >
      <SsrSuspense fallback={<TransactionsTableMiniContainerSkeleton />}>
        <TransactionsTableMiniInner />
      </SsrSuspense>
    </ErrorBoundaryWithFallback>
  );
}
