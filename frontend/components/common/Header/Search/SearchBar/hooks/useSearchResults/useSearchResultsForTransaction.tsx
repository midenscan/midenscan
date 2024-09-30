import { graphql, useFragment } from "react-relay";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";

import {
  SearchResultsForCategory,
  HeaderTextContainer,
  FooterTextContainer,
} from "../../SearchBar.utils";
import * as paths from "libs/paths";
import { useSearchResultsForTransactionFragment_searchResult$key } from "libs/types/__generated__/useSearchResultsForTransactionFragment_searchResult.graphql";

export const TRANSACTION_SEARCH_RESULT_CATEGORY_NAME = "Transactions";

const useSearchResultsForTransactionQueryGRAPHQL = graphql`
  fragment useSearchResultsForTransactionFragment_searchResult on SearchResult {
    transaction {
      transaction_id
      account_id
    }
  }
`;
export function useSearchResultsForTransaction({
  searchKey,
}: {
  searchKey: Nullable<useSearchResultsForTransactionFragment_searchResult$key>;
}): Nullable<SearchResultsForCategory> {
  const searchData = useFragment(
    useSearchResultsForTransactionQueryGRAPHQL,
    searchKey
  );
  const transaction = searchData?.transaction;

  if (transaction) {
    return {
      categoryName: TRANSACTION_SEARCH_RESULT_CATEGORY_NAME,
      results: [
        {
          id: transaction.transaction_id,
          icon: ClipboardDocumentCheckIcon,
          headerComponent: (
            <HeaderTextContainer>
              {transaction.transaction_id}
            </HeaderTextContainer>
          ),
          footerComponent: (
            <FooterTextContainer>{transaction.account_id}</FooterTextContainer>
          ),
          routeUrl: paths.transaction(transaction.transaction_id),
        },
      ],
    };
  }

  return null;
}
