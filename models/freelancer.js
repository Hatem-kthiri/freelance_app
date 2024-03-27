const mongoose = require("mongoose");

let image = "";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please Provide a Username"],
    trim: true,
    minlength: 4,
  },
  avatar: {
    type: String,
    default: image,
  },
  email: {
    type: String,
    required: [true, "please provide a email"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Please Provide Password"],
    minlength: 8,
    trim: true,
  },
  bio: {
    type: String,
    default: "Hello There!",
    minlength: 2,
    maxlength: 250,
  },
});

module.exports = mongoose.model("User", userSchema);
