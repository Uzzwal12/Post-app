const { ApolloServer } = require("apollo-server")
const gql = require("graphql-tag")
const mongoose = require("mongoose")
const dbConfig = require("./config/default.json")
const dbUrl = dbConfig.dbUrl

mongoose
.connect(dbUrl, {useNewUrlParser:true, useUnifiedTopology: true})
.then(() => console.log("Connected to mongoDb..."))
.catch((error) => {console.log(error)})

const typeDefs = gql `

	type Query {
		sayHi: String!
	}
`

const resolvers = {
	Query: {
		sayHi: () => {return('Hello world')}
	}
}

const server = new ApolloServer({
	typeDefs,
	resolvers
})

server.listen({port: 5000}).then(res => {
	console.log(`Server running at ${res.url}`)
})