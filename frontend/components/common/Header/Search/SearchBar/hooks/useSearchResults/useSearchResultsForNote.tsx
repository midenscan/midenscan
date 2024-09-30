import { graphql, useFragment } from "react-relay";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

import {
  SearchResultsForCategory,
  HeaderTextContainer,
  FooterTextContainer,
} from "../../SearchBar.utils";
import * as paths from "libs/paths";
import { useSearchResultsForNoteFragment_searchResult$key } from "libs/types/__generated__/useSearchResultsForNoteFragment_searchResult.graphql";

export const NOTE_SEARCH_RESULT_CATEGORY_NAME = "Notes";

const useSearchResultsForNoteQueryGRAPHQL = graphql`
  fragment useSearchResultsForNoteFragment_searchResult on SearchResult {
    note {
      note_id
      nullifier
    }
  }
`;
export function useSearchResultsForNote({
  searchKey,
}: {
  searchKey: Nullable<useSearchResultsForNoteFragment_searchResult$key>;
}): Nullable<SearchResultsForCategory> {
  const searchData = useFragment(
    useSearchResultsForNoteQueryGRAPHQL,
    searchKey
  );
  const note = searchData?.note;

  if (note) {
    return {
      categoryName: NOTE_SEARCH_RESULT_CATEGORY_NAME,
      results: [
        {
          id: note.note_id,
          icon: DocumentTextIcon,
          headerComponent: (
            <HeaderTextContainer>{note.note_id}</HeaderTextContainer>
          ),
          footerComponent: (
            <FooterTextContainer>
              {note.nullifier ?? "UNKNOWN NULLIFIER"}
            </FooterTextContainer>
          ),
          routeUrl: paths.note(note.note_id),
        },
      ],
    };
  }

  return null;
}
