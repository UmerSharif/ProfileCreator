const User = require("../../models/User");
const { SECRET_KEY } = require("../../dbConfig");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  Mutation: {
    registerUser: async (
      _,
      { registerInput: { username, email, password, confirmPassword } } = args
    ) => {
      const user = await User.findOne({ username });
      if (user) {
        console.log("user already exist..");
      }
      password = await bcrypt.hash(password, 12);

      const newUser = new User({
        username,
        email,
        password
      });

      const res = await newUser.save();

      const token = jwt.sign(
        {
          id: res.id,
          email: res.email,
          username: res.username
        },
        SECRET_KEY,
        { expiresIn: "1h" }
      );
      return { ...res._doc, id: res._id, token };
    }
  }
};
