const Profile = require("../../models/Profile");

module.exports = resolvers = {
  Query: {
    getProfiles: async () => {
      try {
        const profile = await Profile.find();
        return profile;
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  Mutation: {
    addProfiles: async (_, { profileInput: { username, imageUrl } }) => {
      const newProfile = new Profile({
        username,
        imageUrl
      });
      try {
        const newProfileResult = await newProfile.save();
        return newProfileResult;
      } catch (err) {
        throw new Error(err);
      }
    }
  }
};
