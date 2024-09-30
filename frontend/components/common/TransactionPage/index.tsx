import { graphql, useLazyLoadQuery } from "react-relay";

import { TransactionPageQuery } from "libs/types/__generated__/TransactionPageQuery.graphql";
import { useDetailsTabState } from "components/modules/DetailsTab";
import { ErrorBoundaryWithFallback } from "components/modules/ErrorBoundaryWithFallback";
import { SsrSuspense } from "components/modules/SsrSuspense";
import { TransactionPageContainer } from "./TransactionPageContainer";
import { TransactionPageError } from "./TransactionPageError";
import { TransactionPageSkeleton } from "./TransactionPageSkeleton";
import { TransactionPageTabs } from "./TransactionPageTabs";

const TransactionPageQueryGRAPHQL = graphql`
  query TransactionPageQuery($input: TransactionInput!) {
    transaction(input: $input) {
      transaction_id
      ...TransactionPageOverviewTabFragment_transaction
    }
  }
`;
function TransactionPageInner({ transactionId }: { transactionId: string }) {
  const [selectedTab, setSelectedTab] = useDetailsTabState();
  const transactionData = useLazyLoadQuery<TransactionPageQuery>(
    TransactionPageQueryGRAPHQL,
    {
      input: {
        transaction_id: transactionId,
      },
    }
  );

  return (
    <TransactionPageContainer
      selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}
    >
      <TransactionPageTabs
        selectedTab={selectedTab}
        transactionData={transactionData}
      />
    </TransactionPageContainer>
  );
}

export function TransactionPage({
  transactionId,
  loading,
}: {
  transactionId: Nullable<string>;
  loading: boolean;
}) {
  if (loading) {
    return <TransactionPageSkeleton />;
  }

  if (transactionId === null) {
    return (
      <TransactionPageError error={new Error("Transaction does not exist")} />
    );
  }

  return (
    <ErrorBoundaryWithFallback
      renderFallbackComponent={(error: Error) => (
        <TransactionPageError error={error} />
      )}
    >
      <SsrSuspense fallback={<TransactionPageSkeleton />}>
        <TransactionPageInner transactionId={transactionId} />
      </SsrSuspense>
    </ErrorBoundaryWithFallback>
  );
}
