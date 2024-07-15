import { ApolloServer, gql } from "apollo-server";

// * TypeDefs
const typeDefs = gql`
  type User {
    id: String
    name: String
  }

  type Post {
    id: String
    title: String
  }
`;

const server = new ApolloServer({
  typeDefs,
});

const PORT = process.env.PORT || 5000;

server.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
