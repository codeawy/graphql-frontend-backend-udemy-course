import { ApolloServer, gql } from "apollo-server";

// * TypeDefs
const typeDefs = gql`
  type User {
    id: String!
    name: String!
    age: String
  }

  type Post {
    id: String!
    title: String!
    description: String
  }

  type Query {
    getUsers: [User!]!
    getPosts: [Post!]!
  }
`;

const resolvers = {
  Query: {
    getUsers: () => [
      { id: "1", name: "Codeawy" },
      { id: "2", name: "Naga" },
    ],
    getPosts: () => [
      { id: "1", title: "First Post" },
      { id: "2", title: "Second Post" },
    ],
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const PORT = process.env.PORT || 5000;

server.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
