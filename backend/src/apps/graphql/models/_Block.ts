import { ObjectType, Field } from "type-graphql";
import {
  BigIntNumberScalar,
  ConnectionType,
  EdgeType,
  DigestStringScalar,
} from "apps/graphql/models";

@ObjectType("Block")
export class GRAPHQL_Block {
  @Field(() => DigestStringScalar)
  block_hash: Buffer;

  @Field(() => BigIntNumberScalar)
  block_number: bigint;

  @Field(() => BigIntNumberScalar)
  version: bigint;

  @Field(() => BigIntNumberScalar)
  timestamp: bigint;

  @Field(() => DigestStringScalar)
  chain_root: Buffer;

  @Field(() => DigestStringScalar)
  account_root: Buffer;

  @Field(() => DigestStringScalar)
  nullifier_root: Buffer;

  @Field(() => DigestStringScalar)
  note_root: Buffer;

  @Field(() => DigestStringScalar)
  tx_hash: Buffer;

  @Field(() => DigestStringScalar)
  proof_hash: Buffer;

  @Field(() => DigestStringScalar)
  sub_hash: Buffer;

  @Field(() => BigIntNumberScalar)
  number_of_transactions: bigint;
}

@ObjectType("BlockEdge")
export class GRAPHQL_BlockEdge extends EdgeType("block", GRAPHQL_Block) {}

@ObjectType("BlockConnection")
export class GRAPHQL_BlockConnection extends ConnectionType<GRAPHQL_BlockEdge>(
  "block",
  GRAPHQL_BlockEdge
) {}
