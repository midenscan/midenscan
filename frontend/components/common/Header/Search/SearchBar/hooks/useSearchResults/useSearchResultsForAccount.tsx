import { graphql, useFragment } from "react-relay";
import { UserIcon } from "@heroicons/react/24/outline";

import {
  SearchResultsForCategory,
  HeaderTextContainer,
  BadgeContainer,
} from "../../SearchBar.utils";
import * as paths from "libs/paths";
import { useSearchResultsForAccountFragment_searchResult$key } from "libs/types/__generated__/useSearchResultsForAccountFragment_searchResult.graphql";
import { AccountStorageModelBadge } from "components/modules/Badges";

export const ACCOUNT_SEARCH_RESULT_CATEGORY_NAME = "Accounts";

const useSearchResultsForAccountQueryGRAPHQL = graphql`
  fragment useSearchResultsForAccountFragment_searchResult on SearchResult {
    account {
      account_id
      is_private
    }
  }
`;
export function useSearchResultsForAccount({
  searchKey,
}: {
  searchKey: Nullable<useSearchResultsForAccountFragment_searchResult$key>;
}): Nullable<SearchResultsForCategory> {
  const searchData = useFragment(
    useSearchResultsForAccountQueryGRAPHQL,
    searchKey
  );
  const account = searchData?.account;

  if (account) {
    return {
      categoryName: ACCOUNT_SEARCH_RESULT_CATEGORY_NAME,
      results: [
        {
          id: account.account_id,
          icon: UserIcon,
          headerComponent: (
            <HeaderTextContainer>{account.account_id}</HeaderTextContainer>
          ),
          footerComponent: (
            <BadgeContainer>
              <AccountStorageModelBadge
                accountStorageModelType={
                  account.is_private ? "Private" : "Public"
                }
              />
            </BadgeContainer>
          ),
          routeUrl: paths.account(account.account_id),
        },
      ],
    };
  }

  return null;
}
