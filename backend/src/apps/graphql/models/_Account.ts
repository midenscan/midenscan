import { ObjectType, Field } from "type-graphql";
import {
  BigIntNumberScalar,
  ConnectionType,
  EdgeType,
  DigestStringScalar,
  AccountStringScalar,
} from "apps/graphql/models";
import { DB_MidenAccountType } from "types";

@ObjectType("Account")
export class GRAPHQL_Account {
  @Field(() => AccountStringScalar)
  account_id: Buffer;

  @Field(() => Boolean)
  is_private: boolean;

  @Field(() => DigestStringScalar)
  block_hash: Buffer;

  @Field(() => BigIntNumberScalar)
  block_number: bigint;

  @Field(() => DB_MidenAccountType, { nullable: true })
  account_type: Nullable<DB_MidenAccountType>;

  @Field(() => Boolean, { nullable: true })
  is_faucet: Nullable<boolean>;

  @Field(() => [String], { nullable: true })
  code_procedure: Nullable<String[]>;
}

@ObjectType("AccountEdge")
export class GRAPHQL_AccountEdge extends EdgeType("account", GRAPHQL_Account) {}

@ObjectType("AccountConnection")
export class GRAPHQL_AccountConnection extends ConnectionType<GRAPHQL_AccountEdge>(
  "account",
  GRAPHQL_AccountEdge
) {}
