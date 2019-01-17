const express = require('express');
const router = express.Router();
require('dotenv').load();
var SpotifyWebApi = require('spotify-web-api-node');

router.use(express.json());

const authCode =   'AQAgjS78s64u1axMCBCRA0cViW_ZDDU0pbgENJ_-WpZr3cEO7V5O-JELcEPU6pGLPp08SfO3dnHmu6XJikKqrU8LX9W6J11NyoaetrXtZFW-Y58UGeV69tuyybcNUS2u6eyup1EgzbTEx4LqrP_eCHsc9xHJ0JUzEhi7xcqzQG70roE4WKM_YrlDZO-e7GDRMqunS9RMoSwF_ov-gOMpvy9OMb7O58nZoc3LSEdEwoZPCLU4N4TTJ-IF6YsQRhQkEOJK';


var spotifyApi = new SpotifyWebApi({
    clientId: "b56e28cbf84e4c38aec748a3f8891a29",
    clientSecret: "517016abe18342c193482decf3c669e1",
    redirectUri: "http://localhost:8888/callback"
  });

let token;
let refresh;



spotifyApi.authorizationCodeGrant(authCode).then(
    function(data) {
        // Set the access token and refresh token
        spotifyApi.setAccessToken(data.body['access_token']);
        spotifyApi.setRefreshToken(data.body['refresh_token']);
    
        // Save the amount of seconds until the access token expired
        tokenExpirationEpoch =
        new Date().getTime() / 1000 + data.body['expires_in'];
        console.log(
        'Retrieved token. It expires in ' +
            Math.floor(tokenExpirationEpoch - new Date().getTime() / 1000) +
            ' seconds!'
        );
    },
    function(err) {
        console.log(spotifyApi.getRefreshToken())
        console.log(
            'Something went wrong when retrieving an access token',
            err.message
        );
    }
);

router.get('/', (req, res) => {
    token = spotifyApi.getAccessToken();
    refresh = spotifyApi.getRefreshToken()
    console.log(token, refresh)
    res.status(200).json(token);
});

module.exports = router;