import { DigestStringScalar } from "apps/graphql/models";
import { InputType, Field } from "type-graphql";

@InputType("NoteAssetsInput")
export class GRAPHQL_NoteAssetsInput {
  @Field(() => DigestStringScalar)
  note_id: Buffer;
}
