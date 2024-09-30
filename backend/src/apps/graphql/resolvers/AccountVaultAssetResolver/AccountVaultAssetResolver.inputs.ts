import { AccountStringScalar } from "apps/graphql/models";
import { InputType, Field } from "type-graphql";

@InputType("AccountVaultAssetsInput")
export class GRAPHQL_AccountVaultAssetsInput {
  @Field(() => AccountStringScalar)
  account_id: Buffer;
}
