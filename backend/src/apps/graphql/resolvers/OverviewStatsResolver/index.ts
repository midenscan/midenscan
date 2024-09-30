import { Resolver, Query } from "type-graphql";

import { GRAPHQL_OverviewStats } from "apps/graphql/models";
import * as db_block from "db/block";
import * as db_transaction from "db/transaction";
import * as db_account from "db/account";
import * as db_account_update from "db/account_update";
import * as db_note from "db/note";
import * as db_nullifier from "db/nullifier";
import * as utils from "utils";

@Resolver(() => GRAPHQL_OverviewStats)
export class OverviewStatsResolver {
  @Query(() => GRAPHQL_OverviewStats)
  async overviewStats(): Promise<GRAPHQL_OverviewStats> {
    const overviewStatsRes = await Promise.all([
      db_block.getTotalCount(),
      db_transaction.getTotalCount(),
      db_account.getTotalCount(),
      db_account_update.getTotalCount(),
      db_note.getTotalCount(),
      db_nullifier.getTotalCount(),
    ]);

    // 10800 = 3 hours
    const numberOfSecondsAgo = 10800n;
    const lastBlock = await db_block.getLastBlockFromTimestamp(
      utils.getCurrentUnixTimestampSeconds() - numberOfSecondsAgo
    );
    const numberOfTransactions =
      await db_transaction.getTotalCountAfterBlockNumber(
        lastBlock.block_number
      );
    const tps = Number(numberOfTransactions) / Number(numberOfSecondsAgo);

    return {
      total_count_blocks: overviewStatsRes[0],
      total_count_transactions: overviewStatsRes[1],
      total_count_accounts: overviewStatsRes[2],
      total_count_account_updates: overviewStatsRes[3],
      total_count_notes: overviewStatsRes[4],
      total_count_nullifiers: overviewStatsRes[5],
      transactions_per_second: tps.toFixed(2),
    };
  }
}
