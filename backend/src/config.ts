import assert from "assert";

// onlyProd specifies that the env var is only required for production env
function mustGetEnvVar(variableName: string): string {
  const value = process.env[variableName];
  assert.ok(value, `The ${variableName} environment variable is required`);
  return value;
}

// comma delimited string of allowed origins cors
export const CORS_ALLOWED_ORIGINS: string = mustGetEnvVar(
  "CORS_ALLOWED_ORIGINS"
);

// Miden endpoint details
export const POSTGRES_URL: string = mustGetEnvVar("POSTGRES_URL");
