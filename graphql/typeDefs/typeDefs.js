const { gql } = require("apollo-server");

module.exports = gql`
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
