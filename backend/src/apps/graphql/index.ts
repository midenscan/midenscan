import "reflect-metadata";
import "dotenv/config";

import { registerEnums, createApolloServer } from "./setup";

registerEnums();
const server = createApolloServer();

server.listen({ port: 8080 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
