import { graphql, fetchQuery } from "react-relay";
import * as paths from "libs/paths";
import { initEnvironment } from "libs/graphql/environment";
import { getSearchRouteQuery } from "libs/types/__generated__/getSearchRouteQuery.graphql";

const getSearchRouteQueryGRAPHQL = graphql`
  query getSearchRouteQuery($input: SearchInput!) {
    search(input: $input) {
      block {
        block_number
      }
      transaction {
        transaction_id
      }
      account {
        account_id
      }
      note {
        note_id
      }
      nullifier {
        nullifier
      }
    }
  }
`;

// returns the path to forward to based on the filter
// null if no path found
export async function getSearchRoute(
  filter: string
): Promise<Nullable<string>> {
  const environment = initEnvironment();
  const data = await fetchQuery<getSearchRouteQuery>(
    environment,
    getSearchRouteQueryGRAPHQL,
    {
      input: {
        filter: filter,
      },
    }
  ).toPromise();

  const searchData = data?.search;
  if (searchData?.block?.block_number) {
    return paths.block(searchData.block.block_number);
  }
  if (searchData?.transaction?.transaction_id) {
    return paths.transaction(searchData.transaction.transaction_id);
  }
  if (searchData?.account?.account_id) {
    return paths.account(searchData.account.account_id);
  }
  if (searchData?.note?.note_id) {
    return paths.note(searchData.note.note_id);
  }
  if (searchData?.nullifier?.nullifier) {
    return paths.nullifier(searchData.nullifier.nullifier);
  }

  return null;
}
