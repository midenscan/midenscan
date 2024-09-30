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
  GRAPHQL_AccountConnection,
  GRAPHQL_AccountUpdate,
} from "apps/graphql/models";
import * as db_account from "db/account";
import * as db_account_update from "db/account_update";

import {
  GRAPHQL_AccountInput,
  GRAPHQL_AccountsInput,
} from "./AccountResolver.inputs";

@Resolver(() => GRAPHQL_Account)
export class AccountResolver {
  @FieldResolver(() => ID)
  id(@Root() account: GRAPHQL_Account): string {
    return account.account_id.toString();
  }

  @Query(() => GRAPHQL_Account)
  async account(
    @Arg("input") input: GRAPHQL_AccountInput
  ): Promise<GRAPHQL_Account> {
    const account = await db_account.get(input.account_id);
    if (!account) {
      throw new Error("Account does not exist");
    }
    return account;
  }

  @Query(() => GRAPHQL_AccountConnection)
  async accounts(
    @Args() connectionArgs: ConnectionArgs,
    @Arg("input") input: GRAPHQL_AccountsInput
  ): Promise<GRAPHQL_AccountConnection> {
    try {
      const limitCount = connectionArgs.first!;
      const cursor = connectionArgs.after!;

      const { accounts, hasNextPage } = await db_account.getManyPagination({
        sort_by: input.sort_by,
        order_by: input.order_by,

        cursor: cursor,
        limit: limitCount,
      });

      const edges = accounts.map((account) => ({
        cursor: account.__internal_cursor,
        node: account,
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
      console.log("[accounts]: ", err);
      throw new Error("Could not get accounts.");
    }
  }

  @FieldResolver(() => GRAPHQL_AccountUpdate)
  async latest_account_update(
    @Root() account: GRAPHQL_Account
  ): Promise<GRAPHQL_AccountUpdate> {
    // TODO use graphql loader
    const accountUpdate = await db_account_update.getLatestByAccountID(
      account.account_id
    );
    if (!accountUpdate) {
      throw new Error("Unexpected error, cannot find account update");
    }
    return accountUpdate;
  }
}
