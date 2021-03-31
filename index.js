const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const dbConfig = require("./config/default.json");
const dbUrl = dbConfig.dbUrl;
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to mongoDb..."))
  .catch((error) => {
    console.log(error);
  });

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

server.listen({ port: 5000 }).then((res) => {
  console.log(`Server running at ${res.url}`);
});
