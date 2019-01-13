const express = require ('express');
const server = express ();
const cors = require ('cors');
const SERVER_CONFIGS = require('./constants/server_configs.js');
const configureServer = require('./server');
const configureRoutes = require('./routes');


server.use (express.json ());
server.use (cors ());
configureServer(server);
configureRoutes(server);

const reviewRoutes = require ('./routes/reviewRoutes');
const userRoutes = require ('./routes/userRoutes.js');
// reviews route
server.use ('/reviews', reviewRoutes);

// user route
server.use ('/user', userRoutes);

server.listen ((process.env.PORT || 9000));
