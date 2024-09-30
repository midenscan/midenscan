import { FieldResolver, Resolver, ID, Root, Query, Arg } from "type-graphql";

import { GRAPHQL_Note, GRAPHQL_Nullifier } from "apps/graphql/models";
import * as utils from "utils";
import * as db_nullifier from "db/nullifier";
import * as db_note from "db/note";

import { GRAPHQL_NullifierInput } from "./NullifierResolver.inputs";

@Resolver(() => GRAPHQL_Nullifier)
export class NullifierResolver {
  @FieldResolver(() => ID)
  id(@Root() nullifier: GRAPHQL_Nullifier): string {
    return utils.bufferToDigest(nullifier.nullifier);
  }

  @Query(() => GRAPHQL_Nullifier)
  async nullifier(
    @Arg("input") input: GRAPHQL_NullifierInput
  ): Promise<GRAPHQL_Nullifier> {
    const nullifier = await db_nullifier.get(input.nullifier);
    if (!nullifier) {
      throw new Error("Nullifier does not exist");
    }
    return nullifier;
  }

  @FieldResolver(() => GRAPHQL_Note, { nullable: true })
  async note(
    @Root() nullifier: GRAPHQL_Nullifier
  ): Promise<Nullable<GRAPHQL_Note>> {
    // TODO use graphql loader
    const note = await db_note.getByNullifier(nullifier.nullifier);
    if (note) {
      return note;
    }
    return null;
  }
}
