const path = require('path');

const SERVER_PORT = 9000;

const SERVER_CONFIG = {
    PRODUCTION: process.env.NODE_ENV === 'production',
    PORT: process.env.PORT || SERVER_PORT
};

module.exports = SERVER_CONFIG;