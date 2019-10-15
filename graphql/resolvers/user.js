const User = require("../../models/User");
import { SECRET_KEY } from "../../dbConfig";

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  Mutation: {
    registerUser: async () => {
      try {
      } catch (err) {
        throw new Error(err);
      }
    }
  }
};
