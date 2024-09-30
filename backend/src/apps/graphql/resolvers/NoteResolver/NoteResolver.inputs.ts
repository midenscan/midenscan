import { DigestStringScalar } from "apps/graphql/models";
import { InputType, Field } from "type-graphql";
import { NotesSortBy, OrderBy } from "types";

@InputType("NoteInput")
export class GRAPHQL_NoteInput {
  @Field(() => DigestStringScalar)
  note_id: Buffer;
}

@InputType("NotesInput")
export class GRAPHQL_NotesInput {
  @Field(() => DigestStringScalar, { nullable: true })
  block_hash: Nullable<Buffer>;

  @Field(() => NotesSortBy)
  sort_by: NotesSortBy;

  @Field(() => OrderBy)
  order_by: OrderBy;
}
