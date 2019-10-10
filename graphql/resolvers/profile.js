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

module.exports = resolvers = {
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
