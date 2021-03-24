const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
  body: String,
  userName: String,
  createdAt: String,
  comments: [
    {
      body: String,
      userName: String,
      createdAt: String
    }
  ],
  likes: [
    {
    	userName: String,
      createdAt: String
    }
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  }
})

const Post = mongoose.model("Post", postSchema)

module.exports = Post