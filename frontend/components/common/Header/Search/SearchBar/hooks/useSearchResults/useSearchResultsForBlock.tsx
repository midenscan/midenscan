import { graphql, useFragment } from "react-relay";
import { CubeIcon } from "@heroicons/react/24/outline";

import {
  SearchResultsForCategory,
  HeaderTextContainer,
  FooterTextContainer,
} from "../../SearchBar.utils";
import * as paths from "libs/paths";
import { useSearchResultsForBlockFragment_searchResult$key } from "libs/types/__generated__/useSearchResultsForBlockFragment_searchResult.graphql";

const useSearchResultsForBlockQueryGRAPHQL = graphql`
  fragment useSearchResultsForBlockFragment_searchResult on SearchResult {
    block {
      id
      block_hash
      block_number
    }
  }
`;
export function useSearchResultsForBlock({
  searchKey,
}: {
  searchKey: Nullable<useSearchResultsForBlockFragment_searchResult$key>;
}): Nullable<SearchResultsForCategory> {
  const searchData = useFragment(
    useSearchResultsForBlockQueryGRAPHQL,
    searchKey
  );
  const block = searchData?.block;

  if (block) {
    return {
      categoryName: "Blocks",
      results: [
        {
          id: block.id,
          icon: CubeIcon,
          headerComponent: (
            <HeaderTextContainer>
              {block.block_number ?? block.block_hash}
            </HeaderTextContainer>
          ),
          footerComponent: (
            <FooterTextContainer>{block.block_hash}</FooterTextContainer>
          ),
          routeUrl: paths.block(block.block_number),
        },
      ],
    };
  }

  return null;
}
