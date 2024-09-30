import React from "react";
import { graphql, useFragment } from "react-relay";

import { AccountPageCodeTabFragment_account$key } from "libs/types/__generated__/AccountPageCodeTabFragment_account.graphql";

const AccountPageCodeTabFragmentGRAPHQL = graphql`
  fragment AccountPageCodeTabFragment_account on Account {
    code_procedure
  }
`;

export function AccountPageCodeTab({
  accountKey,
}: {
  accountKey: AccountPageCodeTabFragment_account$key;
}) {
  const account = useFragment(AccountPageCodeTabFragmentGRAPHQL, accountKey);

  return (
    <dl className="sm:divide-y sm:divide-gray-200 dark:sm:divide-gray-600">
      {account.code_procedure?.map((code_procedure, index) => (
        <div key={code_procedure} className="w-full px-6 py-4">
          {code_procedure}
        </div>
      ))}
    </dl>
  );
}
