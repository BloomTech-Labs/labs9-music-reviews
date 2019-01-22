const express = require('express');
const cors = require('cors');
const SERVER_CONFIGS = require('./constants/server');
// const corsOptions = require('./server')
var request = require('request');
require('dotenv').load();

const app = express();

app.use(cors())
<<<<<<< HEAD
  .use(express.json());
=======
  .use(express.json())
  .use(express.static(__dirname + '/public'))
  .use(cookieParser())
  .use(session({
    // cookie: { domain: 'https://labs9carreviews.netlify.com' }
    secret: 'LambdaLabsCS12MusicReviews',
    cookie: { domain: '.labs9carreviews.netlify.com' }
  }));

>>>>>>> 3dc50c4b490c84a1628c2f6ae3657c91ce0cdbfb

const configureRoutes = require('./routes');
configureRoutes(app);

const trackReviewRoutes = require('./routes/trackReviewRoutes.js');
const albumReviewRoutes = require('./routes/albumReviewRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
<<<<<<< HEAD
const spotifyRoutes = require('./routes/spotifyRoutes');

=======
const likedAlbumReviewRoutes = require('./routes/likedAlbumReviewRoutes.js');
const likedTrackReviewRoutes = require('./routes/likedTrackReviewRoutes.js')
>>>>>>> 3dc50c4b490c84a1628c2f6ae3657c91ce0cdbfb
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
