const express = require('express');
const router = express.Router();
require('dotenv').load();
var SpotifyWebApi = require('spotify-web-api-node');

router.use(express.json());

var spotifyApi = new SpotifyWebApi({
    clientId: "b56e28cbf84e4c38aec748a3f8891a29",
    clientSecret: "517016abe18342c193482decf3c669e1"
  });

router.get('/', (req, res) => {
    spotifyApi.clientCredentialsGrant().then(
        function(data) {
        console.log('The access token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);

        spotifyApi.setAccessToken(data.body['access_token']);

        res.status(200).json(data.body['access_token'])
        },
        function(err) {
        console.log(
            'Something went wrong when retrieving an access token',
            err.message
        );
        }
    );
    }
)

module.exports = router;