const { model, Schema } = require("mongoose");

const profileSchema = new Schema({
  username: String,
  imageUrl: String
});

module.exports = model("Profile", profileSchema);
