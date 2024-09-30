import { ObjectType, Field } from "type-graphql";
import {
  BigIntNumberScalar,
  ConnectionType,
  EdgeType,
  AccountStringScalar,
  DigestStringScalar,
} from "apps/graphql/models";

@ObjectType("NoteAsset")
export class GRAPHQL_NoteAsset {
  @Field(() => String)
  note_asset_id: string;

  @Field(() => DigestStringScalar)
  note_id: Buffer;

  @Field(() => AccountStringScalar)
  faucet_id: Buffer;

  @Field(() => BigIntNumberScalar)
  amount: bigint;
}

@ObjectType("NoteAssetEdge")
export class GRAPHQL_NoteAssetEdge extends EdgeType(
  "noteAsset",
  GRAPHQL_NoteAsset
) {}

@ObjectType("NoteAssetConnection")
export class GRAPHQL_NoteAssetConnection extends ConnectionType<GRAPHQL_NoteAssetEdge>(
  "noteAssets",
  GRAPHQL_NoteAssetEdge
) {}
