import { ObjectType, Field } from "type-graphql";
import {
  BigIntNumberScalar,
  ConnectionType,
  EdgeType,
  AccountStringScalar,
} from "apps/graphql/models";

@ObjectType("AccountVaultAsset")
export class GRAPHQL_AccountVaultAsset {
  @Field(() => String)
  account_vault_asset_id: string;

  @Field(() => AccountStringScalar)
  account_id: Buffer;

  @Field(() => AccountStringScalar)
  faucet_id: Buffer;

  @Field(() => BigIntNumberScalar)
  amount: bigint;
}

@ObjectType("AccountVaultAssetEdge")
export class GRAPHQL_AccountVaultAssetEdge extends EdgeType(
  "accountVaultAsset",
  GRAPHQL_AccountVaultAsset
) {}

@ObjectType("AccountVaultAssetConnection")
export class GRAPHQL_AccountVaultAssetConnection extends ConnectionType<GRAPHQL_AccountVaultAssetEdge>(
  "accountVaultAssets",
  GRAPHQL_AccountVaultAssetEdge
) {}
