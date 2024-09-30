import { graphql, useLazyLoadQuery } from "react-relay";

import { AccountPageQuery } from "libs/types/__generated__/AccountPageQuery.graphql";
import { useDetailsTabState } from "components/modules/DetailsTab";
import { ErrorBoundaryWithFallback } from "components/modules/ErrorBoundaryWithFallback";
import { SsrSuspense } from "components/modules/SsrSuspense";
import { AccountPageContainer } from "./AccountPageContainer";
import { AccountPageError } from "./AccountPageError";
import { AccountPageSkeleton } from "./AccountPageSkeleton";
import { AccountPageTabs } from "./AccountPageTabs";

const AccountPageQueryGRAPHQL = graphql`
  query AccountPageQuery($input: AccountInput!) {
    account(input: $input) {
      account_id
      is_private
      ...AccountPageOverviewTabFragment_account
      ...AccountPageCodeTabFragment_account
    }
  }
`;
function AccountPageInner({ accountId }: { accountId: string }) {
  const [selectedTab, setSelectedTab] = useDetailsTabState();
  const accountData = useLazyLoadQuery<AccountPageQuery>(
    AccountPageQueryGRAPHQL,
    {
      input: {
        account_id: accountId,
      },
    }
  );

  return (
    <AccountPageContainer
      selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}
      isAccountPrivate={accountData.account.is_private}
    >
      <AccountPageTabs selectedTab={selectedTab} accountData={accountData} />
    </AccountPageContainer>
  );
}

export function AccountPage({
  accountId,
  loading,
}: {
  accountId: Nullable<string>;
  loading: boolean;
}) {
  if (loading) {
    return <AccountPageSkeleton />;
  }

  if (accountId === null) {
    return <AccountPageError error={new Error("Account does not exist")} />;
  }

  return (
    <ErrorBoundaryWithFallback
      renderFallbackComponent={(error: Error) => (
        <AccountPageError error={error} />
      )}
    >
      <SsrSuspense fallback={<AccountPageSkeleton />}>
        <AccountPageInner accountId={accountId} />
      </SsrSuspense>
    </ErrorBoundaryWithFallback>
  );
}
