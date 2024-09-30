import { ObjectType, Field } from "type-graphql";
import {
  GRAPHQL_Block,
  GRAPHQL_Transaction,
  GRAPHQL_Account,
  GRAPHQL_Note,
  GRAPHQL_Nullifier,
} from "apps/graphql/models";

@ObjectType("SearchResult")
export class GRAPHQL_SearchResult {
  @Field(() => GRAPHQL_Block, { nullable: true })
  block: Nullable<GRAPHQL_Block>;

  @Field(() => GRAPHQL_Transaction, { nullable: true })
  transaction: Nullable<GRAPHQL_Transaction>;

  @Field(() => GRAPHQL_Account, { nullable: true })
  account: Nullable<GRAPHQL_Account>;

  @Field(() => GRAPHQL_Note, { nullable: true })
  note: Nullable<GRAPHQL_Note>;

  @Field(() => GRAPHQL_Nullifier, { nullable: true })
  nullifier: Nullable<GRAPHQL_Nullifier>;
}
