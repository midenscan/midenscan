import React from "react";

import {
  BlocksTableMini,
  TransactionsTableMini,
} from "components/modules/Tables";
import * as paths from "libs/paths";
import { LinkRef } from "components/modules/LinkRef";

export function Tables() {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex pt-10 gap-x-10 overflow-hidden">
      <div className="w-1/2">
        <div className="flex w-full justify-between mb-2.5">
          <div className="font-semibold ml-0.5 text-primary dark:text-darkPrimary">
            Latest Blocks
          </div>
          <LinkRef
            href={paths.blocks}
            className="text-sm hover:underline text-blue-800 dark:text-blue-400"
          >
            View all blocks →
          </LinkRef>
        </div>
        <BlocksTableMini />
      </div>
      <div className="w-1/2">
        <div className="flex w-full justify-between mb-2.5">
          <div className="font-semibold ml-0.5 text-primary dark:text-darkPrimary">
            Latest Transactions
          </div>
          <LinkRef
            href={paths.transactions}
            className="text-sm hover:underline text-blue-800 dark:text-blue-400"
          >
            View all transactions →
          </LinkRef>
        </div>
        <TransactionsTableMini />
      </div>
    </div>
  );
}
