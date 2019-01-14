const express = require('express');
const app = express();
const cors = require('cors');
const SERVER_CONFIGS = require('./constants/server');

const configureRoutes = require('./routes');

app.use(express.json());
app.use(cors());

configureRoutes(app);

const reviewRoutes = require('./routes/reviewRoutes');
const userRoutes = require('./routes/userRoutes.js');

// reviews route
app.use('/reviews', reviewRoutes);

// user route
app.use('/user', userRoutes);

app.listen ((process.env.PORT || 9000), error => {
    if (error) throw error;
    console.log(`Server running on port: ${SERVER_CONFIGS.PORT}`);

});
