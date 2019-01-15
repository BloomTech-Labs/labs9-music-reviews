/*This file is used to configure object for firebase and make
a firebase class with methods for authentication*/
import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor () {
    app.initializeApp (config);
    this.auth = app.auth ();
  }
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword (email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword (email, password);

  doSignOut = () => this.auth.signOut ();

  doPassWordReset = email => this.auth.sendPasswordResetEmail (email);

  doSendVerificationViaEmail = name =>
    this.auth.currentUser
      .updateProfile ({displayName: name})
      .then (res =>
        this.auth.currentUser.sendEmailVerification ({
          url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
        })
      )
      .catch (err => console.log (err));
}

export default Firebase;
