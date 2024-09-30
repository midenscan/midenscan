import { TransactionsTableMiniContainer } from "./TransactionsTableMiniContainer";

export function TransactionsTableMiniContainerSkeleton() {
  return (
    <TransactionsTableMiniContainer
      transactionsData={null}
      isLoading={true}
    />
  )
}