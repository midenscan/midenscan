import { AccountStringScalar } from "apps/graphql/models";
import { InputType, Field } from "type-graphql";
import { AccountsSortBy, OrderBy } from "types";

@InputType("AccountInput")
export class GRAPHQL_AccountInput {
  @Field(() => AccountStringScalar)
  account_id: Buffer;
}

@InputType("AccountsInput")
export class GRAPHQL_AccountsInput {
  @Field(() => AccountsSortBy)
  sort_by: AccountsSortBy;

  @Field(() => OrderBy)
  order_by: OrderBy;
}
