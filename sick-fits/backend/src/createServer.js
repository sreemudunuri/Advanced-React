// import graphql yoga server 
// and express server 

// import graphql serever from yoga package
const { GraphQLServer } = require('graphql-yoga');

// need to import resolvers - query and mutation
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');

// db - prisma 
const db = require('./db');

// create graphQL yoga server
function createServer() {
    return new GraphQLServer({
        typeDefs: 'src/schema.graphql',
        resolvers: {
            Mutation,
            Query
        },
        resolverValidationOptions: {
            requireResolversForResolveType: false
        },
        context: req => ({...req, db}),
    });
};

module.exports = createServer






