import { DigestStringScalar } from "apps/graphql/models";
import { InputType, Field } from "type-graphql";
import { AccountUpdatesSortBy, OrderBy } from "types";

@InputType("AccountUpdateInput")
export class GRAPHQL_AccountUpdateInput {
  @Field(() => String)
  account_update_id: string;
}

@InputType("AccountUpdatesInput")
export class GRAPHQL_AccountUpdatesInput {
  @Field(() => DigestStringScalar, { nullable: true })
  block_hash: Nullable<Buffer>;

  @Field(() => AccountUpdatesSortBy)
  sort_by: AccountUpdatesSortBy;

  @Field(() => OrderBy)
  order_by: OrderBy;
}
