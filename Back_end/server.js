<<<<<<< HEAD
const cors = require('cors');
const bodyParser = require('body-parser');

const CORS_WHITELIST = require('./constants/frontEnd');

const corsOptions = {
    origin: (origin, callback) => 
        (CORS_WHITELIST.indexOf(origin) !== -1)
            ? callback(null, true)
            : callback(new Error('Not allowed by CORS'))
};

const configureServer = app => {
    app.use(cors(corsOptions));
    app.use(bodyParser.json());
}

module.exports = configureServer;
=======
const express = require('express')
const server = express()
const cors = require('cors')

server.use(express.json())
server.use(cors())

const reviewRoutes = require('./routes/reviewRoutes')
const userRoutes = require('./routes/userRoutes.js')

// sanity check
server.use('/', (req, res) => {
  res.send('Server running...')
})

// reviews route
server.use('/reviews', reviewRoutes)

// user route
server.use('/user', userRoutes)

server.listen ((process.env.PORT || 9000));

>>>>>>> 6630a78b105fc5cb7694ca2eb9942c979ae195a3
