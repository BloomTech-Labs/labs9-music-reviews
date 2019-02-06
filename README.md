# labs9-music-reviews

## Tech stack:
Node.js Express, sqlite and pg

## Libraries:
These are the libraries used:
    "axios": "^0.18.0",
    "body-parser": "^1.18.3",
    "cookie-parser": "^1.4.3",
    "cors": "^2.8.5",
    "dotenv": "^6.2.0",
    "express": "^4.16.4",
    "express-session": "^1.15.6",
    "faker": "^4.1.0",
    "firebase-admin": "^6.5.0",
    "helmet": "^3.15.0",
    "knex": "^0.16.3",
    "nodemon": "^1.18.9",
    "pg": "^7.8.0",
    "sqlite3": "^4.0.4",
    "stripe": "^6.20.0"


### Database access
Database access `usersDB.js` file included inside the data folder. It publishes the following methods: 
* getAllUsers: returns a promise of all users contained in the database
* createNewUser: returns promise to create a new user
* getUser: returns a promise of user info, given a valid email
* edit: update: accepts two arguments,an id and date. Using the id, it updates subscription expiration of a user.
* editNickName: updates nickname, it accepts two arguments, an id and nickname. Using the id to find a user and update  the nickname
* getNickName:  takes one argument i.e. userID and returns users nickname.

Database access `trackReviewsDb.js` file included inside the data folder. It publishes the following methods:
* retrieve: returns promise  of all track reviews contained in the database
* retrieveById: will be expecting an Id and returns review matching the id passed
* retrieveUserByUserId: takes userID as an argument and returns reviews matching that userID
* write: will add review to the reviews table
* edit: update accepts two arguments id and review. Using the id will locate the review and updates with the new passed review
* remove: takes an id argument and removes reviews that matches the id.

Database access `albumReviewsDb.js` file included inside the data folder. It publishes the following methods:
* retrieve: returns promise  of all album reviews contained in the database
* retrieveById: will be expecting an Id and returns album review matching the id passed
* retrieveUserByUserId: takes userID as an argument and returns reviews matching that userID
* write: will add review to the reviews table
* edit: update accepts two arguments id and review. Using the id will locate the review and updates with the new passed review
* remove: takes an id argument and removes reviews that matches the id.

### POST schema
POST to the database confirms to the following structure:
users.
```
{
    firebaseUID: "PXl9fiZMGMgMx48kQM0fv7O3Cc",
    emailAddress: "sam@gmail.com",
    paidMembership: "0",
    subscriptionExpiration: "Sun Apr 07 2019 00:47:06",
    nickname: "sam"
}
```
albumReview
```
{
    dateCreated: "Feb 06 2019",
    dateModified: "Feb 06 2019",
    rating:"3",
    review: "The album is ok"
    spotifyAlbumID: "0lheRPWdziAtZEiww8TrUO",
}
```
trackReview
```
{
    dateCreated: "Feb 06 2019",
    dateModified: "Feb 06 2019",
    rating:"1",
    review: "why bury a friend? I don't like this"
    spotifyTrackID: "NzMOnvSJVNKF7nw5NkXIP",
}
```


### endpoints for Track Review

| Method | Endpoint       | Description
| ------ | -------------- | ------------------------------------------------------------------------------------------------------
| POST   | /trackReviews    | Creates a track review using the information sent inside the `request body`.
| GET    | /trackReviews     | Returns an array of all the track review objects contained in the database.
| GET    | /trackReviews/:id | Returns the trackReview object with the specified id.
| DELETE | /trackReviews/:id | Removes the track review  with the specified id
| PUT    | /trackReviews/:id | Updates the track review with the specified `id` using data from the `request body`.

### endpoints for Album Review

| Method | Endpoint       | Description
| ------ | -------------- | -----------------------------------------------------------------------------------------------------
| POST   | /albumReview    | Creates a album review using the information sent inside the `request body`.
| GET    | /albumReview     | Returns an array of all the album review objects contained in the database.
| GET    | /albumReview/:id | Returns the album review object with the specified id.
| DELETE | /albumReview/:id | Removes the album review with the specified id.
| PUT    | /albumReview/:id | Updates the album review with the specified `id` using data from the `request body`.

### endpoints for Users
| Method | Endpoint       | Description
| ------ | -------------- | --------------------------------------------------------------------------------------------------------------
| POST   | /users/create     | Creates a user using the information sent inside the `request body`.
| GET    | /users/get/:email     | Returns an array of all the post objects contained in the database.
| GET    | /users/:userID/nickname | Returns the nickname
| PUT    | /users/:userID/Change_nickname | Updates the post with the specified `id` using data from the `request body`. Returns the modified record.


## API Reference

* https://labs9-car-reviews.herokuapp.com/trackReviews ```Returns all track Reviews```
* https://labs9-car-reviews.herokuapp.com/trackReviews/[userID] ``` returns track review matching userID passed, if there is no matching userID, returns an empty array```


* https://labs9-car-reviews.herokuapp.com/albumReviews ```returns all album reviews ```
* https://labs9-car-reviews.herokuapp.com/albumReviews/[userID] ``` returns album review matching the userID passed, if there is no matching userID returns empty array```


* https://labs9-car-reviews.herokuapp.com/users  ``` returns all users```
* https://labs9-car-reviews.herokuapp.com/users/get/[valid email address] ```retuns user information matching the email address ```
* https://labs9-car-reviews.herokuapp.com/users/[userID]/nickname ```returns nickname of a user matching an id ```


