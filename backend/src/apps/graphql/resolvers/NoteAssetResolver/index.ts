import {
  FieldResolver,
  Resolver,
  ID,
  Root,
  Query,
  Arg,
  Args,
} from "type-graphql";

import {
  ConnectionArgs,
  GRAPHQL_NoteAsset,
  GRAPHQL_NoteAssetConnection,
} from "apps/graphql/models";
import * as db_note_asset from "db/note_asset";

import { GRAPHQL_NoteAssetsInput } from "./NoteAssetResolver.inputs";
import { NoteAssetsSortBy, OrderBy } from "types";

@Resolver(() => GRAPHQL_NoteAsset)
export class NoteAssetResolver {
  @FieldResolver(() => ID)
  id(@Root() note_asset: GRAPHQL_NoteAsset): string {
    return note_asset.note_asset_id;
  }

  @Query(() => GRAPHQL_NoteAssetConnection)
  async noteAssets(
    @Args() connectionArgs: ConnectionArgs,
    @Arg("input") input: GRAPHQL_NoteAssetsInput
  ): Promise<GRAPHQL_NoteAssetConnection> {
    try {
      const limitCount = connectionArgs.first!;
      const cursor = connectionArgs.after!;

      const { noteAssets, hasNextPage } = await db_note_asset.getManyPagination(
        {
          sort_by: NoteAssetsSortBy.faucet_id,
          order_by: OrderBy.asc,

          note_id: input.note_id,

          cursor: cursor,
          limit: limitCount,
        }
      );

      const edges = noteAssets.map((noteAsset) => ({
        cursor: noteAsset.__internal_cursor,
        node: noteAsset,
      }));

      return {
        edges,
        pageInfo: {
          hasNextPage: hasNextPage,
          hasPreviousPage: false,
          startCursor: null,
          endCursor: hasNextPage ? edges[edges.length - 1].cursor : null,
        },
      };
    } catch (err) {
      console.log("[noteAssets]: ", err);
      throw new Error("Could not get note assets.");
    }
  }
}
