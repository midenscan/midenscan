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
  GRAPHQL_Account,
  GRAPHQL_AccountUpdate,
  GRAPHQL_AccountUpdateConnection,
} from "apps/graphql/models";
import * as db_account from "db/account";
import * as db_account_update from "db/account_update";
import {
  GRAPHQL_AccountUpdateInput,
  GRAPHQL_AccountUpdatesInput,
} from "./AccountUpdateResolver.inputs";

@Resolver(() => GRAPHQL_AccountUpdate)
export class AccountUpdateResolver {
  @FieldResolver(() => ID)
  id(@Root() accountUpdate: GRAPHQL_AccountUpdate): string {
    return accountUpdate.account_update_id;
  }

  @Query(() => GRAPHQL_AccountUpdate)
  async accountUpdate(
    @Arg("input") input: GRAPHQL_AccountUpdateInput
  ): Promise<GRAPHQL_AccountUpdate> {
    const accountUpdate = await db_account_update.get(input.account_update_id);
    if (!accountUpdate) {
      throw new Error("Account Update does not exist");
    }
    return accountUpdate;
  }

  @Query(() => GRAPHQL_AccountUpdateConnection)
  async accountUpdates(
    @Args() connectionArgs: ConnectionArgs,
    @Arg("input") input: GRAPHQL_AccountUpdatesInput
  ): Promise<GRAPHQL_AccountUpdateConnection> {
    try {
      const limitCount = connectionArgs.first!;
      const cursor = connectionArgs.after!;

      const { accountUpdates, hasNextPage } =
        await db_account_update.getManyPagination({
          sort_by: input.sort_by,
          order_by: input.order_by,

          block_hash: input.block_hash,

          cursor: cursor,
          limit: limitCount,
        });

      const edges = accountUpdates.map((accountUpdate) => ({
        cursor: accountUpdate.__internal_cursor,
        node: accountUpdate,
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
      console.log("[accountUpdates]: ", err);
      throw new Error("Could not get accounts updates.");
    }
  }

  @FieldResolver(() => GRAPHQL_Account)
  async account(
    @Root()
    accountUpdate: GRAPHQL_AccountUpdate
  ): Promise<GRAPHQL_Account> {
    // TODO use graphql loader
    return await db_account.get(accountUpdate.account_id);
  }
}
