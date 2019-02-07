# Labs 9 - On The Record
On The Record is a website that allows users to leave their honest opinions on their choice of albums and/or tracks. 

# Motivation
On The Record deviates from traditional review sites where professionals often write biased reviews, usually driven by monetary incentives, and influence the readers' perception and impression. In contrast, On The Record provides a space for its users to freely express their opinions on certain pieces of music. 

# Build Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/a32436d8-0761-4df9-90fc-4d9dde0037ca/deploy-status)](https://app.netlify.com/sites/labs9carreviews/deploys)

#### On The Record - https://labs9carreviews.netlify.com/

![](https://firebasestorage.googleapis.com/v0/b/labs9-music-reviews.appspot.com/o/Website%20Images%2FOTR%20Logo%20X.png?alt=media&token=d3989fdf-1445-463f-afda-1549824b9fa2)

# Tech Stack
- ### React.js
    - #### Reuseable Components
        -   It makes development and maintenance easier. In addition, reuseable components can help the           website to look and feel more consistent.
    - #### Virtual DOM
        - More cost efficient method to test and see the changes reflect immediately. It delivers a higher performance and cleaner UX.
    - #### One-Way Data Flow 
        -  Rerendering only happens when the data has changed. This helps developers to debug errors by           allowing developers to inspect the state of the app.
- ### Express.js/SQLite(PostgreSQL)
    - #### Routing
        -  It allows better organization of the endpoints to handle different HTTP requests.
    - #### Ease of Connection to Databases
    - #### Simple Configuration and Customization to Get Server Running
    - #### Reduces application cost 
        - Content can be accessed and updated using SQL queries
    - #### Can be extended in future releases
        - Adding new tables or columns can be done with ease. Backwards compatibility is also preserved.

# Dependencies and Environment
### Back End Dependencies 
- [axios](https://www.npmjs.com/package/axios)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)
- [express-session](https://www.npmjs.com/package/express-session)
- [faker](https://www.npmjs.com/package/faker)
- [firebase-admin](https://www.npmjs.com/package/firebase-admin)
- [helmet](https://www.npmjs.com/package/helmet)
- [knex](https://www.npmjs.com/package/knex)
- [nodemon](https://www.npmjs.com/package/nodemon) (DEVELOPMENT ONLY)
- [pg](https://www.npmjs.com/package/pg)
- [sqlite3](https://www.npmjs.com/package/sqlite3)
- [stripe](https://www.npmjs.com/package/stripe)

### Front End Dependencies 
- [axios](https://www.npmjs.com/package/axios)
- [bootstrap](https://www.npmjs.com/package/bootstrap)
- [firebase](https://www.npmjs.com/package/firebase)
- [react-cookie](https://www.npmjs.com/package/react-cookie)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [react-ratings-declarative](https://www.npmjs.com/package/react-ratings-declarative)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [react-stripe-checkout](https://www.npmjs.com/package/react-stripe-checkout)
- [reactstrap](https://www.npmjs.com/package/reactstrap)
- [recompose](https://www.npmjs.com/package/recompose)
- [styled-components](https://www.npmjs.com/package/styled-components)

# Installation
- Fork and clone repo from: https://github.com/Lambda-School-Labs/labs9-music-reviews
- Change directory to `Front_end`
- Run `yarn install`
- Please refer to `How to Set Up Environment Variables for On The Record.md` in the same directory before continuing
- Run `yarn start`
- If errors occur, please make sure all dependencies are installed by referencing `package.json`

# API Documentation
## Third-Party APIs
- [Stripe](https://stripe.com/docs)
- [Spotify](https://developer.spotify.com/documentation/web-api/reference/)

# How to Use?
- All features presented on On The Record are available to registered users only. The first step is to create an account.
- User may sign up using his/her email/password, or the user can sign up by logging into his/her Google account by clicking ![](https://firebasestorage.googleapis.com/v0/b/labs9-music-reviews.appspot.com/o/Website%20Images%2FGoogleWhite.png?alt=media&token=ba31e7bf-af7f-4d38-b53c-bc2ea5a164f9) on the sign up page. (Note: New users are given 60 days of subscription for free. Users can navigate to settings to confirm the status)
- Once logged in/signed up, user will be redirected to the Home page where it shows the latest releases and popular tracks (updated daily).
- User may choose to select any of the featured album/track and write a review, or click `SEARCH` on the navbar and search for an album/track.
- On the respective album/track page, playback is enabled for user to revisit the album/track as he/she writes a review. (Note: User has to log into their Spotify account to listen to the full album/track. Otherwise it will be a 30-second snippet)

# Contributors
<center>
| AD Faris | Adam Lee |  Das G. Ma  | Francis Tse  |  Keith Haag (Project Manager) |
|----------|------------|----------------|-----------------------| ---------------|
| ![AD Faris](https://ca.slack-edge.com/T4JUEB3ME-U90KKDADV-cdc4cecf0d75-48)  | ![Adam Lee](https://ca.slack-edge.com/T4JUEB3ME-UB4MBM7FZ-8c44fa13e6b7-48)  | ![Das G. Ma](https://ca.slack-edge.com/T4JUEB3ME-UB0E286A2-83f59c1735d0-48)  | ![Francis Tse](https://ca.slack-edge.com/T4JUEB3ME-UAY9JQZGQ-92c0dc2a73c1-48) | ![Keith Haag](https://firebasestorage.googleapis.com/v0/b/labs9-music-reviews.appspot.com/o/chief.JPG?alt=media&token=8653fa07-58a1-4b78-bb0a-e26a3aca7e03) |
| [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/adfaris)  | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Adamcglee)    |  [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/DasGMA)   | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/francistse23)    |  [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/kkhaag)  
| [<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15">](https://www.linkedin.com/in/ad-faris/) |  [<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15">](https://www.linkedin.com/in/adamcglee/)  | [<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15">](https://www.linkedin.com/in/dasgrigoma/)  |  [<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15">](http://www.linkedin.com/in/francis-tse) |  [<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15">](https://www.linkedin.com/in/k-haag/)
</center>

# License
![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)

The MIT License

Copyright (c) 2019 OnTheRecord.us

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.