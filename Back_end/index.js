const express = require('express');
const app = express();
const cors = require('cors');
const SERVER_CONFIGS = require('./constants/server');

const configureRoutes = require('./routes');

app.use(express.json());
app.use(cors());

configureRoutes(app);

const trackReviewRoutes = require('./routes/trackReviewRoutes');
const albumReviewRoutes = require('./routes/albumReviewRoutes');
const userRoutes = require('./routes/userRoutes.js');

// track reviews route
app.use('/trackReviews', trackReviewRoutes);

// album reviews route
app.use('/albumReviews', albumReviewRoutes);

// user route
app.use('/user', userRoutes);

app.listen(process.env.PORT || 9000, (error) => {
  if (error) throw error;
  console.log(`Server running on port: ${SERVER_CONFIGS.PORT}`);
});
