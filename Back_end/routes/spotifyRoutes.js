const express = require('express');
const session = require('express-session');
const cors = require('cors');
var request = require('request');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
const router = express.Router();
require('dotenv').load();

router.use(cors())
  .use(express.json())
  .use(express.static(__dirname + '/public'))
  .use(cookieParser())
  .use(session({
    secret: 'LambdaLabsCS12MusicReviews',
    cookie: { domain: '.labs9carreviews.netlify.com' }
}));

var client_id = process.env.CLIENT_ID;
var client_secret = process.env.CLIENT_SECRET;
var redirect_uri = process.env.REDIRECT_URI || "http://localhost:9000/spotify/callback";
let refresh_token, access_token;

var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = 'spotify_auth_state';

router.get('/login', function(req, res) {
  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  var scope = 'user-read-private user-read-email user-modify-playback-state streaming user-read-birthdate';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});

router.get('/callback', function(req, res) {

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        access_token = body.access_token,
        refresh_token = body.refresh_token;

        var options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };
        
        request.get(options, function(error, response, body) {
        });

        res.cookie("access_token", access_token);

        res.status(200).json({
          access_token: access_token
        })
      } else {
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
  }
});

router.get('/refresh_token', function(req, res) {

  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      access_token = body.access_token;
      res.cookie("access_token", access_token);
      res.send({
        'access_token': access_token
      });
    }
  });
});

router.get('/get_token', function(req, res) {
  res.send({
    'access_token': access_token
  });
});

module.exports = router;