import { ApolloServer } from "apollo-server";
import { buildSchemaSync, registerEnumType } from "type-graphql";
import depthLimit from "graphql-depth-limit";
import * as config from "config";

import {
  BlocksSortBy,
  AccountsSortBy,
  AccountUpdatesSortBy,
  NotesSortBy,
  OrderBy,
  DB_MidenAccountType,
  DB_MidenNoteType,
  AccountVaultAssetsSortBy,
  TransactionsSortBy,
  NoteAssetsSortBy,
  MidenNoteStatus,
} from "types";
import {
  BlockResolver,
  AccountResolver,
  AccountUpdateResolver,
  AccountVaultAssetResolver,
  NoteResolver,
  NullifierResolver,
  OverviewStatsResolver,
  TransactionResolver,
  NoteAssetResolver,
  SearchResolver,
} from "./resolvers";

export function registerEnums(): void {
  registerEnumType(BlocksSortBy, {
    name: "BlocksSortBy",
  });
  registerEnumType(AccountsSortBy, {
    name: "AccountsSortBy",
  });
  registerEnumType(AccountUpdatesSortBy, {
    name: "AccountUpdatesSortBy",
  });
  registerEnumType(AccountVaultAssetsSortBy, {
    name: "AccountVaultAssetsSortBy",
  });
  registerEnumType(TransactionsSortBy, {
    name: "TransactionsSortBy",
  });
  registerEnumType(NotesSortBy, {
    name: "NotesSortBy",
  });
  registerEnumType(NoteAssetsSortBy, {
    name: "NoteAssetsSortBy",
  });
  registerEnumType(OrderBy, {
    name: "OrderBy",
  });

  registerEnumType(DB_MidenAccountType, {
    name: "MidenAccountType",
  });
  registerEnumType(DB_MidenNoteType, {
    name: "MidenNoteType",
  });
  registerEnumType(MidenNoteStatus, {
    name: "MidenNoteStatus",
  });
}

const ALLOWED_ORIGINS: string[] = config.CORS_ALLOWED_ORIGINS.split(",");
export function createApolloServer(): ApolloServer {
  return new ApolloServer({
    csrfPrevention: true,
    // introspection: true,
    schema: buildSchemaSync({
      resolvers: [
        BlockResolver,
        AccountResolver,
        AccountUpdateResolver,
        AccountVaultAssetResolver,
        TransactionResolver,
        NoteResolver,
        NoteAssetResolver,
        NullifierResolver,
        OverviewStatsResolver,
        SearchResolver,
      ],
      validate: {
        // https://github.com/MichalLytek/type-graphql/issues/1396
        forbidUnknownValues: false,
      },
    }),
    validationRules: [depthLimit(5)],
    cors: {
      origin: ALLOWED_ORIGINS,
      credentials: false,
    },
  });
}
