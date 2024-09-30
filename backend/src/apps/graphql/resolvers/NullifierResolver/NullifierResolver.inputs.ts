import { DigestStringScalar } from "apps/graphql/models";
import { InputType, Field } from "type-graphql";

@InputType("NullifierInput")
export class GRAPHQL_NullifierInput {
  @Field(() => DigestStringScalar)
  nullifier: Buffer;
}
