// this file connects to the remote prisma db, lets us query with js

const { Prisma } = require('prisma-binding')

 const db = new Prisma({
    typeDefs: 'src/generated/database.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    debug: true,
 })

 module.exports = db