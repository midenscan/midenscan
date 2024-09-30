module.exports = {
  src: "./",
  artifactDirectory: "./libs/types/__generated__",
  language: "typescript",
  schema: "./libs/graphql/schema.graphql",
  exclude: ["**/.next/**", "**/node_modules/**", "**/__generated__/**"],
  customScalars: {
    "BigIntNumber": "number",
    "BigIntString": "string",
    "DigestString": "string",
    "AccountString": "string",
  }
}
