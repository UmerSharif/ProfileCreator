const { model, Schema } = require("mongoose");

const profileSchema = new Schema({
  username: String,
  imageUrl: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = model("Profile", profileSchema);
