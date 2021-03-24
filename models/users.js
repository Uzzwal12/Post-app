const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
    userName: String,
    password: String,
    email: String,
    createdAt: String
})

const User = mongoose.model("User", userschema)

module.exports = User