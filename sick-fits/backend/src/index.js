 // dotenv to access our env variables
require('dotenv').config({path: 'variables.env'});

//import graphqlyoga server
const createServer = require('createServer');

//import our db
const db = require('./db');

// invoke our server from server variable
const server = createServer();

//TODO use express middleware to handle cookies (JWT)
// TODO use express middleware to poppulate current user

server.start({
    cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL,
    }
}, deets => { 
    console.log(`the server is now runnning on http://localhost:${deets.port}`)
});



