import { Arg, Resolver, Query } from "type-graphql";

import { GRAPHQL_SearchResult } from "apps/graphql/models";
import * as searchServices from "services/search";
import { getValueOrNullFromPromiseSettled } from "utils";
import { GRAPHQL_SearchInput } from "./SearchResolver.input";

@Resolver(() => GRAPHQL_SearchResult)
export class SearchResolver {
  @Query(() => GRAPHQL_SearchResult)
  async search(
    @Arg("input") input: GRAPHQL_SearchInput
  ): Promise<GRAPHQL_SearchResult> {
    try {
      const searchResult: GRAPHQL_SearchResult = {
        block: null,
        transaction: null,
        account: null,
        note: null,
        nullifier: null,
      };

      const searchPromises = [
        searchServices.searchForBlock(input.filter),
        searchServices.searchForTransaction(input.filter),
        searchServices.searchForAccount(input.filter),
        searchServices.searchForNote(input.filter),
        searchServices.searchForNullifier(input.filter),
      ];
      const searchResponses = await Promise.allSettled(searchPromises);
      searchResult.block = getValueOrNullFromPromiseSettled(searchResponses[0]);
      searchResult.transaction = getValueOrNullFromPromiseSettled(
        searchResponses[1]
      );
      searchResult.account = getValueOrNullFromPromiseSettled(
        searchResponses[2]
      );
      searchResult.note = getValueOrNullFromPromiseSettled(searchResponses[3]);
      searchResult.nullifier = getValueOrNullFromPromiseSettled(
        searchResponses[4]
      );

      return searchResult;
    } catch (err) {
      console.log("[search] ", err);
      throw new Error("Could not search");
    }
  }
}
