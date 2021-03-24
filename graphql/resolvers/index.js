const postResolver = require("./post")
const usersResolver = require("./users")

module.exports = {
  Query: {
    ...postResolver.Query
  },

  Mutation: {
    ...usersResolver.Mutation
  }
}