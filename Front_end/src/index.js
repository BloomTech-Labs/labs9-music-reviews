import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import Firebase, {FirebaseContext} from './Components/Firebase';
import "./index.css"

ReactDOM.render (
  <FirebaseContext.Provider value={new Firebase ()}>
    <Router>
      <CookiesProvider>
        <FirebaseContext.Consumer>
          {(firebase) => <App firebase={firebase} />}
        </FirebaseContext.Consumer>
      </CookiesProvider>
    </Router>
  </FirebaseContext.Provider>,
  document.getElementById ('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister ();
