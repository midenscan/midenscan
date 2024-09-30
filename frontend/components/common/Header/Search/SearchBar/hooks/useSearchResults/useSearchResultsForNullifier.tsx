import { graphql, useFragment } from "react-relay";
import { TagIcon } from "@heroicons/react/24/outline";

import {
  SearchResultsForCategory,
  HeaderTextContainer,
  FooterTextContainer,
} from "../../SearchBar.utils";
import * as paths from "libs/paths";
import { useSearchResultsForNullifierFragment_searchResult$key } from "libs/types/__generated__/useSearchResultsForNullifierFragment_searchResult.graphql";

export const NULLIFIER_SEARCH_RESULT_CATEGORY_NAME = "Nullifiers";

const useSearchResultsForNullifierQueryGRAPHQL = graphql`
  fragment useSearchResultsForNullifierFragment_searchResult on SearchResult {
    nullifier {
      nullifier
    }
  }
`;
export function useSearchResultsForNullifier({
  searchKey,
}: {
  searchKey: Nullable<useSearchResultsForNullifierFragment_searchResult$key>;
}): Nullable<SearchResultsForCategory> {
  const searchData = useFragment(
    useSearchResultsForNullifierQueryGRAPHQL,
    searchKey
  );
  const nullifier = searchData?.nullifier;

  if (nullifier) {
    return {
      categoryName: NULLIFIER_SEARCH_RESULT_CATEGORY_NAME,
      results: [
        {
          id: nullifier.nullifier,
          icon: TagIcon,
          headerComponent: (
            <HeaderTextContainer>{nullifier.nullifier}</HeaderTextContainer>
          ),
          footerComponent: <FooterTextContainer>{""}</FooterTextContainer>,
          routeUrl: paths.nullifier(nullifier.nullifier),
        },
      ],
    };
  }

  return null;
}
