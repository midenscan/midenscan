import { AccountStringScalar, DigestStringScalar } from "apps/graphql/models";
import { InputType, Field } from "type-graphql";
import { TransactionsSortBy, OrderBy } from "types";

@InputType("TransactionInput")
export class GRAPHQL_TransactionInput {
  @Field(() => DigestStringScalar)
  transaction_id: Buffer;
}

@InputType("TransactionsInput")
export class GRAPHQL_TransactionsInput {
  @Field(() => DigestStringScalar, { nullable: true })
  block_hash: Nullable<Buffer>;

  @Field(() => AccountStringScalar, { nullable: true })
  account_id: Nullable<Buffer>;

  @Field(() => TransactionsSortBy)
  sort_by: TransactionsSortBy;

  @Field(() => OrderBy)
  order_by: OrderBy;
}
