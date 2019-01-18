const express = require('express');
const router = express.Router();
const axios = require('axios');
const cookieParser = require('cookie-parser');
require('dotenv').load();
var SpotifyWebApi = require('spotify-web-api-node');

router.use(express.json());
router.use(cookieParser());

var clientId = process.env.CLIENT_ID;

var spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: "517016abe18342c193482decf3c669e1",
    redirectUri: process.env.REDIRECT_URI || "http://localhost:8888/callback"
});

let authCode;
var tokenExpirationEpoch;


// router.get('/', (req,res) => {
//     axios.get("https://accounts.spotify.com/authorize", {
//         client_id: clientId,
//         response_type: "code",
//         redirect_uri: "http://localhost:3000",
//         scope: "user-read-private user-read-email",
//         state: "LambdaLabsCS12Music"
//     })
//     .then( res => {
//         let str = res.headers['set-cookie'][0];
//         let re = /A([A-Za-z0-9-_])+/g
//         authCode = re.exec(str);
//         console.log(authCode[0])
//     })
//     .catch(err => console.log(err))
// });

// router.post('/getToken', (req, res) => {
//     axios.post("https://accounts.spotify.com/api/token", {
//         grant_type: "authorization_code",
//         code: authCode[0],
//         redirect_uri: "http://localhost:3000",
//         client_id: clientId,
//         client_secret: clientSecret
//     })
//     .then( res => res.status(200).json(res.data) )
//     .catch( err => console.log(err))
// })

// router.get('/', (req, res) => {

// });
       
        // spotifyApi.authorizationCodeGrant(authCode[0]).then(
        //     function(data) {
        //       // Set the access token and refresh token
        //       spotifyApi.setAccessToken(data.body['access_token']);
        //       spotifyApi.setRefreshToken(data.body['refresh_token']);
          
        //       // Save the amount of seconds until the access token expired
        //       tokenExpirationEpoch =
        //         new Date().getTime() / 1000 + data.body['expires_in'];
        //       console.log(
        //         'Retrieved token. It expires in ' +
        //           Math.floor(tokenExpirationEpoch - new Date().getTime() / 1000) +
        //           ' seconds!'
        //       );
        //     },
        //     function(err) {
        //       console.log(
        //         'Something went wrong when retrieving the access token!',
        //         err.message
        //       );
        //     }
        //   );
          
        //   // Continually print out the time left until the token expires..
        //   var numberOfTimesUpdated = 0;
          
        //   setInterval(function() {
        //     console.log(
        //       'Time left: ' +
        //         Math.floor(tokenExpirationEpoch - new Date().getTime() / 1000) +
        //         ' seconds left!'
        //     );
          
        //     // OK, we need to refresh the token. Stop printing and refresh.
        //     if (++numberOfTimesUpdated > 5) {
        //       clearInterval(this);
          
        //       // Refresh token and print the new time to expiration.
        //       spotifyApi.refreshAccessToken().then(
        //         function(data) {
        //           tokenExpirationEpoch =
        //             new Date().getTime() / 1000 + data.body['expires_in'];
        //           console.log(
        //             'Refreshed token. It now expires in ' +
        //               Math.floor(tokenExpirationEpoch - new Date().getTime() / 1000) +
        //               ' seconds!'
        //           );
        //         },
        //         function(err) {
        //           console.log('Could not refresh the token!', err.message);
        //         }
        //       );
        //     }
        //   }, 1000);


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