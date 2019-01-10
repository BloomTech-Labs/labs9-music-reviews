import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router } from 'react-router-dom'
<<<<<<< Updated upstream:Front_end/src/index.js
=======
// import 'bootstrap/dist/css/bootstrap.min.css'
>>>>>>> Stashed changes:Front_end/car-reviews/src/index.js

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
