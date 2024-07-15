import { ApolloServer } from "apollo-server";

const server = new ApolloServer({});

const PORT = process.env.PORT || 5000;

server.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:5000`);
});
