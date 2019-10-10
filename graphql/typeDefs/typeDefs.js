const { gql } = require("apollo-server");

module.exports = gql`
  type Profile {
    id: ID!
    username: String!
    imageUrl: String!
  }

  input ProfileInput {
    username: String!
    imageUrl: String!
  }

  type Query {
    getProfile: [Profile]
  }

  type Mutation {
    addProfile(profileInput: ProfileInput): Profile!
  }
`;
