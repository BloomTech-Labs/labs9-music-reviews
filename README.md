# labs9-music-reviews


## Back end dependencies:
* [Knex](https://www.knex.com)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [express](https://www.npmjs.com/package/express)
* [helmet](https://www.npmjs.com/package/helmet) 
* [express-session](https://www.npmjs.com/package/express-session)
* [faker](https://www.npmjs.com/package/faker)
* [firebase-admin](https://www.npmjs.com/package/firebase-admin)
* [nodemon](https://www.npmjs.com/package/nodemon)
* [pg](https://www.npmjs.com/package/pg)
* [sqlite3](https://www.npmjs.com/package/sqlite3)
* [stripe](https://www.npmjs.com/package/stripe)



### API Documentation
## Third-party API and libraries

* [stripe](https://www.npmjs.com/package/stripe)

## Backend API

| Method | Endpoint       | Description
| ------ | -------------- | ------------------------------------------------------------------------------------------------------
| POST   | /trackReviews    | Creates a track review using the information sent inside the `request body`.
| GET    | /trackReviews     | Returns an array of all the track review objects contained in the database.
| GET    | /trackReviews/:id | Returns a trackReview object with the specified id.
| DELETE | /trackReviews/:id | Removes the track review  with the specified id
| PUT    | /trackReviews/:id | Updates the track review matching the `id` using data from the `request body`
| POST   | /albumReview    | Creates a album review using the information sent inside the `request body`.
| GET    | /albumReview     | Returns an array of all the album review objects contained in the database.
| GET    | /albumReview/:id | Returns the album review object with the specified id.
| DELETE | /albumReview/:id | Removes the album review with the specified id.
| PUT    | /albumReview/:id | Updates the album review with the specified `id` using data from the `request body`.
| POST   | /users/create     | Creates a user using the information sent inside the `request body`.
| GET    | /users/get/:email     | Returns an object of user with the given email.
| GET    | /users/:userID/nickname | Returns the nickname
| PUT    | /users/:userID/Change_nickname | Updates the post with the specified `id` using data from the `request body`. Returns the modified record.


