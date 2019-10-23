const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./graphql/typeDefs/typeDefs");
const resolvers = require("./graphql/resolvers/resolvers");
const mongoose = require("mongoose");

const { MONGODB } = require("./dbconfig");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return { req };
  }
});

const port = process.env.PORT || 5000;

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    server.listen(port);
  })
  .then(res => {
    console.log(`Server running at port ${port}`);
  });

// server.listen(port, () => console.log(`server running at port ${port}`));
