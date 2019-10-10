const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphql/typeDefs/typeDefs");
const resolvers = require("./graphql/resolvers/profile");
const mongoose = require("mongoose");

const server = new ApolloServer({ typeDefs, resolvers });

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`server running at port ${port}`));
