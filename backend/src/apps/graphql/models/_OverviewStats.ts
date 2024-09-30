import { ObjectType, Field, Float } from "type-graphql";
import { BigIntStringScalar } from "apps/graphql/models";

@ObjectType("OverviewStats")
export class GRAPHQL_OverviewStats {
  @Field(() => BigIntStringScalar)
  total_count_blocks: bigint;

  @Field(() => BigIntStringScalar)
  total_count_transactions: bigint;

  @Field(() => BigIntStringScalar)
  total_count_accounts: bigint;

  @Field(() => BigIntStringScalar)
  total_count_account_updates: bigint;

  @Field(() => BigIntStringScalar)
  total_count_notes: bigint;

  @Field(() => BigIntStringScalar)
  total_count_nullifiers: bigint;

  @Field(() => Float)
  transactions_per_second: string;
}
