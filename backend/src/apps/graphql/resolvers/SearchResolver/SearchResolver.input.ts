import { Field, InputType } from "type-graphql";

@InputType("SearchInput")
export class GRAPHQL_SearchInput {
  @Field()
  filter: string;
}
