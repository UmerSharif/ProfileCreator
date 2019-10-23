const Profile = require("../../models/Profile");
const { Auth } = require("../../utils/Auth");

module.exports = {
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
    addProfiles: async (
      _,
      { profileInput: { displayName, imageUrl } },
      context
    ) => {
      const user = Auth(context);
      if (!user) {
        throw new Error("Authentication Failed..!");
      }
      const newProfile = new Profile({
        displayName,
        imageUrl,
        username: user.username,
        user: user.id
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
