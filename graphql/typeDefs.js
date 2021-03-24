const gql = require("graphql-tag")

module.exports  = gql `

type Post {
  id: ID!,
  body: String!,
  userName: String!,
  createdAt: String!
}

type User {
  id: ID!,
  email: String!,
  token: String!,
  userName: String!,
  createdAt: String!
}

input RegisterInput {
  userName: String!,
  password: String!,
  confirmPassword: String!,
  email: String!
}

type Query {
  getPosts: [Post]
}

type Mutation {
  register(registerInput: RegisterInput): User!
}

`
