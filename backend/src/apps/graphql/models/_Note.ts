import { ObjectType, Field } from "type-graphql";
import {
  BigIntNumberScalar,
  ConnectionType,
  EdgeType,
  DigestStringScalar,
  AccountStringScalar,
  NoteInputsScalar,
} from "apps/graphql/models";
import { DB_MidenNoteType } from "types";

@ObjectType("Note")
export class GRAPHQL_Note {
  @Field(() => DigestStringScalar)
  note_id: Buffer;

  @Field(() => BigIntNumberScalar)
  block_batch_index: bigint;

  @Field(() => BigIntNumberScalar)
  block_note_index_in_batch: bigint;

  @Field(() => DigestStringScalar, { nullable: true })
  recipient: Nullable<Buffer>;

  @Field(() => AccountStringScalar)
  sender: Buffer;

  @Field(() => DB_MidenNoteType)
  note_type: DB_MidenNoteType;

  @Field(() => BigIntNumberScalar)
  note_tag: bigint;

  @Field(() => BigIntNumberScalar)
  note_aux: bigint;

  @Field(() => DigestStringScalar, { nullable: true })
  nullifier: Nullable<Buffer>;

  @Field(() => String, { nullable: true })
  script_code: Nullable<string>;

  @Field(() => NoteInputsScalar, { nullable: true })
  inputs: Nullable<string>;

  @Field(() => DigestStringScalar)
  block_hash: Buffer;

  @Field(() => BigIntNumberScalar)
  block_number: bigint;
}

@ObjectType("NoteEdge")
export class GRAPHQL_NoteEdge extends EdgeType("note", GRAPHQL_Note) {}

@ObjectType("NoteConnection")
export class GRAPHQL_NoteConnection extends ConnectionType<GRAPHQL_NoteEdge>(
  "note",
  GRAPHQL_NoteEdge
) {}
