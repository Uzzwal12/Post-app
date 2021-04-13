const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String,
});

const User = mongoose.model("User", userschema);

module.exports = User;
