import {
  FieldResolver,
  Resolver,
  ID,
  Root,
  Query,
  Arg,
  Args,
} from "type-graphql";

import {
  ConnectionArgs,
  GRAPHQL_Note,
  GRAPHQL_NoteConnection,
} from "apps/graphql/models";
import * as utils from "utils";
import * as db_nullifier from "db/nullifier";
import * as db_note from "db/note";

import { GRAPHQL_NoteInput, GRAPHQL_NotesInput } from "./NoteResolver.inputs";
import { MidenNoteStatus } from "types";

@Resolver(() => GRAPHQL_Note)
export class NoteResolver {
  @FieldResolver(() => ID)
  id(@Root() note: GRAPHQL_Note): string {
    return utils.bufferToDigest(note.note_id);
  }

  @Query(() => GRAPHQL_Note)
  async note(@Arg("input") input: GRAPHQL_NoteInput): Promise<GRAPHQL_Note> {
    const note = await db_note.get(input.note_id);
    if (!note) {
      throw new Error("Note does not exist");
    }
    return note;
  }

  @Query(() => GRAPHQL_NoteConnection)
  async notes(
    @Args() connectionArgs: ConnectionArgs,
    @Arg("input") input: GRAPHQL_NotesInput
  ): Promise<GRAPHQL_NoteConnection> {
    try {
      const limitCount = connectionArgs.first!;
      const cursor = connectionArgs.after!;

      const { notes, hasNextPage } = await db_note.getManyPagination({
        sort_by: input.sort_by,
        order_by: input.order_by,

        block_hash: input.block_hash,

        cursor: cursor,
        limit: limitCount,
      });

      const edges = notes.map((note) => ({
        cursor: note.__internal_cursor,
        node: note,
      }));

      return {
        edges,
        pageInfo: {
          hasNextPage: hasNextPage,
          hasPreviousPage: false,
          startCursor: null,
          endCursor: hasNextPage ? edges[edges.length - 1].cursor : null,
        },
      };
    } catch (err) {
      console.log("[notes]: ", err);
      throw new Error("Could not get notes.");
    }
  }

  @FieldResolver(() => MidenNoteStatus)
  async note_status(@Root() note: GRAPHQL_Note): Promise<MidenNoteStatus> {
    if (note.nullifier) {
      // TODO use graphql loader
      const nullifier = await db_nullifier.get(note.nullifier);
      if (nullifier) {
        return MidenNoteStatus.CONSUMED;
      } else {
        return MidenNoteStatus.COMMITTED;
      }
    }

    return MidenNoteStatus.UNKNOWN;
  }
}
