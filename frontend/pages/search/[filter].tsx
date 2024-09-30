import React from "react";
import { GetServerSideProps } from "next";
import { isString } from "lodash";

import { FourOhFourPage } from "components/common/FourOhFourPage";
import * as paths from "libs/paths";
import { getSearchRoute } from "libs/getSearchRoute";

function Search({ errorMessage }: { errorMessage: string }) {
  return (
    <FourOhFourPage
      headerComponent={
        <>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Search not found
          </h1>
          <p className="mt-2 text-lg text-gray-500 dark:text-gray-300">
            {errorMessage}
          </p>
        </>
      }
    />
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const filterRaw = context.params?.filter;
    if (isString(filterRaw)) {
      // special conditions for local path routing
      if (["home"].includes(filterRaw)) {
        return {
          redirect: {
            destination: "./",
            permanent: true,
          },
        };
      } else if (["blocks", "block"].includes(filterRaw)) {
        return {
          redirect: {
            destination: paths.blocks,
            permanent: true,
          },
        };
      } else if (
        ["transactions", "transaction", "txs", "tx"].includes(filterRaw)
      ) {
        return {
          redirect: {
            destination: paths.transactions,
            permanent: true,
          },
        };
      } else if (["accounts", "account", "acc"].includes(filterRaw)) {
        return {
          redirect: {
            destination: paths.accounts,
            permanent: true,
          },
        };
      } else if (["notes", "note"].includes(filterRaw)) {
        return {
          redirect: {
            destination: paths.notes,
            permanent: true,
          },
        };
      } else if (["nullifiers", "nullifier"].includes(filterRaw)) {
        return {
          redirect: {
            destination: paths.nullifiers,
            permanent: true,
          },
        };
      }

      const forwardPath = await getSearchRoute(filterRaw);
      if (forwardPath) {
        return {
          redirect: {
            destination: forwardPath,
            permanent: true,
          },
        };
      }
    }

    return {
      props: {
        errorMessage: `could not find item with ${filterRaw}`,
      },
    };
  } catch (err) {
    return {
      props: {
        errorMessage: "Unexpected error",
      },
    };
  }
};

export default Search;
