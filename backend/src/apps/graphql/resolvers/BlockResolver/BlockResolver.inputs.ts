import { InputType, Field } from "type-graphql";
import { BlocksSortBy, OrderBy } from "types";

@InputType("BlockInput")
export class GRAPHQL_BlockInput {
  @Field(() => String)
  block_identifier: string;
}

@InputType("BlocksInput")
export class GRAPHQL_BlocksInput {
  @Field(() => BlocksSortBy)
  sort_by: BlocksSortBy;

  @Field(() => OrderBy)
  order_by: OrderBy;
}
