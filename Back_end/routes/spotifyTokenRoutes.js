const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').load();
var SpotifyWebApi = require('spotify-web-api-node');

router.use(express.json());

var clientId = "b56e28cbf84e4c38aec748a3f8891a29";
var clientSecret = "517016abe18342c193482decf3c669e1";


router.get('/', (req,res) => {
    axios.get("https://accounts.spotify.com/authorize", {
        client_id: clientId,
        response_type: "code",
        redirect_uri: "http://localhost:3000",
        scope: "user-read-private user-read-email"
    })
    .then( res => console.log("RESPONSE: ", res) )
    .catch(err => console.log(err) );
});


// var spotifyApi = new SpotifyWebApi({
//     clientId: "b56e28cbf84e4c38aec748a3f8891a29",
//     clientSecret: "517016abe18342c193482decf3c669e1",
//     redirectUri: process.env.REDIRECT_URI || "http://localhost:8888/callback"
//   });

// let token;
// let refresh = "AQCKRXnMQL7nmfBDOV62wwMLqWMIkCsVdZRjmHPuJap5joPYcSyvXR2H6EbipfgQMeM8QYW3rqbD-aRvELjTczjAe6KxZq-BpgLZQIhU7exl62ZRJA0RWB46F8ROpiawQIhJCA";

// spotifyApi.clientCredentialsGrant().then(
//     function(data) {
//         // Set the access token and refresh token
//         spotifyApi.setAccessToken(data.body['access_token']);
//         token = data.body['access_token'];

//         // Save the amount of seconds until the access token expired
//         tokenExpirationEpoch =
//         new Date().getTime() / 1000 + data.body['expires_in'];
//         console.log(
//         'Retrieved token. It expires in ' +
//             Math.floor(tokenExpirationEpoch - new Date().getTime() / 1000) +
//             ' seconds!'
//         );
//     },
//     function(err) {
//         console.log(spotifyApi.getRefreshToken())
//         console.log(
//             'Something went wrong when retrieving an access token',
//             err.message
//         );
//     }
// );


// router.get('/', (req, res) => {
//     res.status(200).json({
//         token: token,
//         refresh: refresh
//     });
// });

module.exports = router;