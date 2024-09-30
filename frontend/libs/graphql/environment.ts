import { useMemo } from "react";
import {
  Environment,
  Network,
  RecordSource,
  Store,
  type GraphQLResponse,
} from "relay-runtime";
import * as config from "libs/config";
import * as constants from "libs/constants";

let relayEnvironment: Environment | null = null;

function createRelayNetwork() {
  return Network.create(async ({ text: query }, variables) => {
    const response = await fetch(config.GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ query, variables }),
    });

    if (response.status !== 200) {
      throw new Error(await response.text());
    }

    const responseData = await response.json();

    // GraphQL returns exceptions (for example, a missing required variable) in the "errors"
    // property of the response. If any exceptions occurred when processing the request,
    // throw an error to indicate to the developer what went wrong.
    if (Array.isArray(responseData.errors)) {
      throw new Error(responseData.errors[0].message);
    }

    return responseData as GraphQLResponse;
  });
}

export const initEnvironment = (records = {}): Environment => {
  const source = new RecordSource(records);
  // DEVNOTE: set gcReleaseBufferSize to avoid caching issues, should implement
  // as an optimization
  const store = new Store(source, { gcReleaseBufferSize: 10 });

  // Create a new instance of Relay environment for every server-side request
  if (constants.IS_SERVER_SIDE) {
    return new Environment({
      configName: "server",
      network: createRelayNetwork(),
      store,
      isServer: true,
    });
  }

  // Reuse Relay environment on client-side
  if (!relayEnvironment) {
    relayEnvironment = new Environment({
      configName: "client",
      network: createRelayNetwork(),
      store,
      isServer: false,
    });
  }

  return relayEnvironment;
};

export function useRelayEnvironment(initialRecords = {}) {
  return useMemo(() => {
    return initEnvironment(initialRecords);
  }, [initialRecords]);
}
