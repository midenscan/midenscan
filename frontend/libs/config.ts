import assert from "assert";
import { MidenNetworkType } from "libs/types";

function mustBeSet(variableName: string, value: string | undefined): string {
  assert.ok(value, `The ${variableName} environment variable is required`);
  return value;
}

export const GRAPHQL_URL = mustBeSet(
  "NEXT_PUBLIC_GRAPHQL_URL",
  process.env.NEXT_PUBLIC_GRAPHQL_URL
);

// specify which miden network
const MIDEN_NETWORK_RAW: string = mustBeSet(
  "NEXT_PUBLIC_MIDEN_NETWORK",
  process.env.NEXT_PUBLIC_MIDEN_NETWORK
);
export let MIDEN_NETWORK: MidenNetworkType = MidenNetworkType.TESTNET;
if (MIDEN_NETWORK_RAW === "testnet") {
  MIDEN_NETWORK = MidenNetworkType.TESTNET;
} else {
  assert.fail("Invalid value from NEXT_PUBLIC_MIDEN_NETWORK");
}
