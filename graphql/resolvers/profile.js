const Profile = require("../../models/Profile");
const Auth = require("../../utils/Auth");
const { AuthenticationError } = require("apollo-server");

module.exports = {
  Query: {
    getProfiles: async () => {
      try {
        const profiles = await Profile.find();
        return profiles;
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  Mutation: {
    addProfiles: async (
      _,
      {
        profileInput: {
          displayName,
          imageUrl,
          title,
          about,
          facebook,
          github,
          linkedin,
          profileType
        }
      },
      context
    ) => {
      const user = Auth(context);
      if (!user) {
        throw new Error("Authentication Failed..!");
      }
      const newProfile = new Profile({
        displayName,
        imageUrl,
        title,
        about,
        facebook,
        github,
        linkedin,
        profileType,
        username: user.username,
        user: user.id
      });
      try {
        const newProfileResult = await newProfile.save();
        return newProfileResult;
      } catch (err) {
        throw new Error(err);
      }
    },
    deleteProfile: async (_, { profileId }, context) => {
      const user = Auth(context);
      if (!user) {
        throw new Error("Invalid credential for this operation...!");
      }

      try {
        const profile = await Profile.findById(profileId);
        //check if the user is the same who created the profile
        if (profile.username === user.username) {
          await profile.delete();
          return "Profile delete successfully.";
        } else {
          throw new AuthenticationError(
            "You are not authorize to delete this profile...!"
          );
        }
      } catch (err) {
        throw new Error(err);
      }
    }
  }
};
