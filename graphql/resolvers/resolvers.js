const profileResolver = require("./profile");
const userResolver = require("./user");

module.exports = {
  Query: {
    ...profileResolver.Query,
    ...userResolver.Query
  },
  Mutation: {
    ...userResolver.Mutation,
    ...profileResolver.Mutation
  }
};
