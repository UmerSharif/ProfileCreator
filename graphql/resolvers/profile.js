const Profile = require("../../models/Profile");

module.exports = resolvers = {
  Query: {
    getProfile: async () => {
      try {
        const profile = await Profile.find();
        return profile;
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  Mutation: {
    addProfile: (_, { profileInput: { username, imageUrl } }) => {
      // destructuring
      const data = {
        username,
        imageUrl
      };
    }
  }
};
