const { AuthenticationError } = require("apollo-server");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../dbconfig");

module.exports = context => {
  const AuthHeader = context.req.headers.authorization;
  if (AuthHeader) {
    //get token
    const token = AuthHeader.split(" ")[1];
    //verify token
    if (token) {
      try {
        const verifiedToken = jwt.verify(token, SECRET_KEY);
        return verifiedToken;
      } catch (err) {
        throw new AuthenticationError("Invalid Token");
      }
    }
    throw new AuthenticationError(
      "Authentication token must be  bearer [token]!"
    );
  }
  throw new Error("Authorization header must be valid!");
};
