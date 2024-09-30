import { ObjectType, Field } from "type-graphql";
import {
  BigIntNumberScalar,
  ConnectionType,
  EdgeType,
  DigestStringScalar,
  AccountStringScalar,
} from "apps/graphql/models";

@ObjectType("Transaction")
export class GRAPHQL_Transaction {
  @Field(() => DigestStringScalar)
  transaction_id: Buffer;

  @Field(() => AccountStringScalar)
  account_id: Buffer;

  @Field(() => DigestStringScalar)
  block_hash: Buffer;

  @Field(() => BigIntNumberScalar)
  block_number: bigint;
}

@ObjectType("TransactionEdge")
export class GRAPHQL_TransactionEdge extends EdgeType(
  "transaction",
  GRAPHQL_Transaction
) {}

@ObjectType("TransactionConnection")
export class GRAPHQL_TransactionConnection extends ConnectionType<GRAPHQL_TransactionEdge>(
  "transaction",
  GRAPHQL_TransactionEdge
) {}
