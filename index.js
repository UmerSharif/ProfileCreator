const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");

//test without db

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

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  input BookInput {
    title: String
    author: String
  }

  type Query {
    getBooks: [Book]!
  }

  type Mutation {
    addBook(bookInput: BookInput): Book!
  }
`;

const resolvers = {
  Query: {
    getBooks: () => {
      return books;
    }
  },

  Mutation: {
    addBook: (_, { bookInput: { title, author } }) => {
      // destructuring
      const data = {
        title,
        author
      };

      books.push(data);
      return books;
    }
  }
};

//test

const server = new ApolloServer({ typeDefs, resolvers });

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`server running at port ${port}`));
