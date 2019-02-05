# labs9-music-reviews

## Node.js Express, sqlite and pg

### Database access
Database access will be through `usersDB.js` file included inside the data folder. It publishes the following methods: 
* getAllUsers: returns promise of all users contained in the database
* createNewUser: returns promise to create a new user
* getUser: returns promise given a valid email returns user info
* edit: update: accepts two arguments,an id and date. Using the id, it updates subsription expiration of a user.
* editNickName: update: accepts two arguments, an id and nickname. Using the id to find a user and update  the nickname
* getNickName: update: takes two arguments, id and nickname. Using the id find a record and update the nickname with the new passed nickname. 

Database access will be through `trackReviewsDb.js` file included inside the data folder. It publishes the following methods:
* retrive: returns promise  of all track reviews contained in the database
* retrieveById: will be expecting an Id and retuns review matching the id passed
* retriveUserByUserId: takes userID as an argument and returns reviews matching that userID
* write: will add review to the reviews table
* edit: update accepts two arguments id and review. Using the id will locate the review and updates with the new passed review
* remove: takes an id argument and removes reviews that matches the id.

Database access will be through `albumReviewsDb.js` file included inside the data folder. It publishes the following methods:
* retrive: returns promise  of all album reviews contained in the database
* retrieveById: will be expecting an Id and retuns album review matching the id passed
* retriveUserByUserId: takes userID as an argument and returns reviews matching that userID
* write: will add review to the reviews table
* edit: update accepts two arguments id and review. Using the id will locate the review and updates with the new passed review
* remove: takes an id argument and removes reviews that matches the id.

### POST schema


### endpoints for Track Review

| Method | Endpoint       | Description                                                                                                                |
| ------ | -------------- | -------------------------------------------------------------------------------------------------------------------------- |
| POST   | /trackReviews    | Creates a track review using the information sent inside the `request body`.                                                     |
| GET    | /trackReviews     | Returns an array of all the track review objects contained in the database.                                                     |
| GET    | /trackReviews/:id | Returns the trackReview object with the specified id.                                                                          |
| DELETE | /trackReviews/:id | Removes the track review  with the specified id.                                                    |
| PUT    | /trackReviews/:id | Updates the track review with the specified `id` using data from the `request body`.             |

### endpoints for Album Review

| Method | Endpoint       | Description                                                                                                               |
| ------ | -------------- | ------------------------------------------------------------------------------------------------------------------------- |
| POST   | /albumReview    | Creates a album review using the information sent inside the `request body`.                                                     |
| GET    | /albumReview     | Returns an array of all the album review objects contained in the database.                                                     |
| GET    | /albumReview/:id | Returns the album review object with the specified id.                                                                          |
| DELETE | /albumReview/:id | Removes the album review with the specified id.                                                    |
| PUT    | /albumReview/:id | Updates the album review with the specified `id` using data from the `request body`.             |

### endpoints for Users
| Method | Endpoint       | Description                                                                                                         |
| ------ | -------------- | ------------------------------------------------------------------------------------------------------------------  |
| POST   | /users/create     | Creates a user using the information sent inside the `request body`.                                                     |
| GET    | /users/get/:email     | Returns an array of all the post objects contained in the database.                                                     |
| GET    | /users/:id | Returns the post object with the specified id.  

| GET    | /users/:userID/nickname | Returns the nickname

| PUT    | /users/:userID/Change_nickname | Updates the post with the specified `id` using data from the `request body`. Returns the modified record.             |





