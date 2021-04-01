const postResolver = require("./post");
const usersResolver = require("./users");
const commentResolver = require("./comment");

module.exports = {
  Post: {
    likeCount: (parent) => parent.likes.length,
    commentCount: (parent) => parent.comments.length,
  },

  Query: {
    ...postResolver.Query,
  },

  Mutation: {
    ...usersResolver.Mutation,
    ...postResolver.Mutation,
    ...commentResolver.Mutation,
  },
};
