const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const dbConfig = require("./config/default.json");
const dbUrl = dbConfig.dbUrl;
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const express = require("express")

mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to mongoDb..."))
  .catch((error) => {
    console.log(error);
  });

const PORT = process.env.port || 5000;

// express().use(path.resolve(__dirname,'build'))

// express().get('*',(req,res)=>{
//   res.send(path.resolve(__dirname,'build','index.js'))
// })
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

server
  .listen({ port: PORT })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  })
  .catch((err) => console.error(err));
