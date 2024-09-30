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
  GRAPHQL_Transaction,
  GRAPHQL_TransactionConnection,
} from "apps/graphql/models";
import * as db_transaction from "db/transaction";

import {
  GRAPHQL_TransactionInput,
  GRAPHQL_TransactionsInput,
} from "./TransactionResolver.inputs";

@Resolver(() => GRAPHQL_Transaction)
export class TransactionResolver {
  @FieldResolver(() => ID)
  id(@Root() transaction: GRAPHQL_Transaction): string {
    return transaction.transaction_id.toString();
  }

  @Query(() => GRAPHQL_Transaction)
  async transaction(
    @Arg("input") input: GRAPHQL_TransactionInput
  ): Promise<GRAPHQL_Transaction> {
    const transaction = await db_transaction.get(input.transaction_id);
    if (!transaction) {
      throw new Error("Transaction does not exist");
    }
    return transaction;
  }

  @Query(() => GRAPHQL_TransactionConnection)
  async transactions(
    @Args() connectionArgs: ConnectionArgs,
    @Arg("input") input: GRAPHQL_TransactionsInput
  ): Promise<GRAPHQL_TransactionConnection> {
    try {
      const limitCount = connectionArgs.first!;
      const cursor = connectionArgs.after!;

      const { transactions, hasNextPage } =
        await db_transaction.getManyPagination({
          sort_by: input.sort_by,
          order_by: input.order_by,

          block_hash: input.block_hash,
          account_id: input.account_id,

          cursor: cursor,
          limit: limitCount,
        });

      const edges = transactions.map((transaction) => ({
        cursor: transaction.__internal_cursor,
        node: transaction,
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
      console.log("[transactions]: ", err);
      throw new Error("Could not get transactions.");
    }
  }
}
