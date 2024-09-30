import {
  FieldResolver,
  Resolver,
  ID,
  Root,
  Query,
  Arg,
  Args,
  Int,
} from "type-graphql";

import {
  ConnectionArgs,
  GRAPHQL_Block,
  GRAPHQL_BlockConnection,
} from "apps/graphql/models";
import * as utils from "utils";
import * as db_block from "db/block";
import * as db_account_update from "db/account_update";
import * as db_note from "db/note";

import {
  GRAPHQL_BlockInput,
  GRAPHQL_BlocksInput,
} from "./BlockResolver.inputs";

@Resolver(() => GRAPHQL_Block)
export class BlockResolver {
  @FieldResolver(() => ID)
  id(@Root() block: GRAPHQL_Block): string {
    return utils.bufferToDigest(block.block_hash);
  }

  @Query(() => GRAPHQL_Block)
  async block(@Arg("input") input: GRAPHQL_BlockInput): Promise<GRAPHQL_Block> {
    let block = null;
    if (utils.isHex(input.block_identifier)) {
      block = await db_block.getByHash(
        utils.digestToBuffer(input.block_identifier)
      );
    } else if (utils.isPositiveInteger(input.block_identifier)) {
      block = await db_block.getByNumber(parseInt(input.block_identifier));
    }

    if (!block) {
      throw new Error("Block does not exist");
    }

    return block;
  }

  @Query(() => GRAPHQL_BlockConnection)
  async blocks(
    @Args() connectionArgs: ConnectionArgs,
    @Arg("input") input: GRAPHQL_BlocksInput
  ): Promise<GRAPHQL_BlockConnection> {
    try {
      const limitCount = connectionArgs.first!;
      const cursor = connectionArgs.after!;

      const { blocks, hasNextPage } = await db_block.getManyPagination({
        sort_by: input.sort_by,
        order_by: input.order_by,

        cursor: cursor,
        limit: limitCount,
      });

      const edges = blocks.map((block) => ({
        cursor: block.__internal_cursor,
        node: block,
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
      console.log("[blocks]: ", err);
      throw new Error("Could not get blocks.");
    }
  }

  @FieldResolver(() => Int)
  async number_of_account_updates(
    @Root() block: GRAPHQL_Block
  ): Promise<number> {
    const accountUpdateCount =
      await db_account_update.getTotalCountByBlockNumber(block.block_number);
    return Number(accountUpdateCount);
  }

  @FieldResolver(() => Int)
  async number_of_notes(@Root() block: GRAPHQL_Block): Promise<number> {
    const noteCount = await db_note.getTotalCountInBlockNumber(
      block.block_number
    );
    return Number(noteCount);
  }
}
