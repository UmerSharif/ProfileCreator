const { gql } = require("apollo-server");

module.exports = gql`
  type Profile {
    id: ID!
    username: String!
    imageUrl: String!
    displayName: String!
  }

  input ProfileInput {
    displayName: String!
    imageUrl: String!
  }

  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
  }

  input RegisterInput {
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
  }

  input LoginInput {
    username: String!
    password: String!
  }

  type Query {
    getProfiles: [Profile]
    getUsers: [User]
  }

  type Mutation {
    addProfiles(profileInput: ProfileInput): Profile!
    registerUser(registerInput: RegisterInput): User!
    loginUser(loginInput: LoginInput): User!
  }
`;
