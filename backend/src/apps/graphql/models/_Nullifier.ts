import { ObjectType, Field } from "type-graphql";
import { BigIntNumberScalar, DigestStringScalar } from "apps/graphql/models";

@ObjectType("Nullifier")
export class GRAPHQL_Nullifier {
  @Field(() => DigestStringScalar)
  nullifier: Buffer;

  @Field(() => DigestStringScalar)
  block_hash: Buffer;

  @Field(() => BigIntNumberScalar)
  block_number: bigint;
}
