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
  GRAPHQL_AccountVaultAsset,
  GRAPHQL_AccountVaultAssetConnection,
} from "apps/graphql/models";
import * as db_account_vault_asset from "db/account_vault_asset";

import { GRAPHQL_AccountVaultAssetsInput } from "./AccountVaultAssetResolver.inputs";
import { AccountVaultAssetsSortBy, OrderBy } from "types";

@Resolver(() => GRAPHQL_AccountVaultAsset)
export class AccountVaultAssetResolver {
  @FieldResolver(() => ID)
  id(@Root() account_vault_asset: GRAPHQL_AccountVaultAsset): string {
    return account_vault_asset.account_vault_asset_id;
  }

  @Query(() => GRAPHQL_AccountVaultAssetConnection)
  async accountVaultAssets(
    @Args() connectionArgs: ConnectionArgs,
    @Arg("input") input: GRAPHQL_AccountVaultAssetsInput
  ): Promise<GRAPHQL_AccountVaultAssetConnection> {
    try {
      const limitCount = connectionArgs.first!;
      const cursor = connectionArgs.after!;

      const { accountVaultAssets, hasNextPage } =
        await db_account_vault_asset.getManyPagination({
          sort_by: AccountVaultAssetsSortBy.faucet_id,
          order_by: OrderBy.asc,

          account_id: input.account_id,

          cursor: cursor,
          limit: limitCount,
        });

      const edges = accountVaultAssets.map((accountVaultAsset) => ({
        cursor: accountVaultAsset.__internal_cursor,
        node: accountVaultAsset,
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
      console.log("[accountVaultAssets]: ", err);
      throw new Error("Could not get account vault assets.");
    }
  }
}
