const express = require('express');
const cors = require('cors');
const SERVER_CONFIGS = require('./constants/server');
// const corsOptions = require('./server')
var request = require('request');
require('dotenv').load();

const app = express();

app.use(cors())
  .use(express.json());

const configureRoutes = require('./routes');
configureRoutes(app);

const trackReviewRoutes = require('./routes/trackReviewRoutes.js');
const albumReviewRoutes = require('./routes/albumReviewRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const spotifyRoutes = require('./routes/spotifyRoutes');
const likedAlbumReviewRoutes = require('./routes/likedAlbumReviewRoutes.js');
const likedTrackReviewRoutes = require('./routes/likedTrackReviewRoutes.js');

// track reviews route
app.use('/trackReviews', trackReviewRoutes);

// album reviews route
app.use('/albumReviews', albumReviewRoutes);

// user route
app.use('/user', userRoutes);

// spotify routes
app.use('/spotify', spotifyRoutes)

//Liked albums route
app.use('/likedAlbumReview', likedAlbumReviewRoutes);

app.use('/likedTrackReview', likedTrackReviewRoutes);

app.listen((process.env.PORT || 9000), error => {
  if (error) throw error;
  console.log(`Server running on port: ${SERVER_CONFIGS.PORT}`);
});
