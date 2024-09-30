import { ObjectType, Field } from "type-graphql";
import {
  BigIntNumberScalar,
  ConnectionType,
  EdgeType,
  DigestStringScalar,
  AccountStringScalar,
} from "apps/graphql/models";

@ObjectType("AccountUpdate")
export class GRAPHQL_AccountUpdate {
  @Field(() => String)
  account_update_id: string;

  @Field(() => AccountStringScalar)
  account_id: Buffer;

  @Field(() => DigestStringScalar)
  block_hash: Buffer;

  @Field(() => BigIntNumberScalar)
  block_number: bigint;

  @Field(() => DigestStringScalar)
  state_hash: Buffer;

  @Field(() => BigIntNumberScalar, { nullable: true })
  nonce: Nullable<bigint>;
}

@ObjectType("AccountUpdateEdge")
export class GRAPHQL_AccountUpdateEdge extends EdgeType(
  "account",
  GRAPHQL_AccountUpdate
) {}

@ObjectType("AccountUpdateConnection")
export class GRAPHQL_AccountUpdateConnection extends ConnectionType<GRAPHQL_AccountUpdateEdge>(
  "accountUpdate",
  GRAPHQL_AccountUpdateEdge
) {}
