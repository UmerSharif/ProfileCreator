const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");

//test

const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];
//test

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    getBooks: [Book]!
  }
`;

const resolvers = {
  Query: {
    getBooks: () => {
      return books;
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`server running at port ${port}`));
