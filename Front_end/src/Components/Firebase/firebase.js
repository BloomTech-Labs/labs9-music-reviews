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
    this.googleProvider = new app.auth.GoogleAuthProvider ();
  }
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword (email, password)
      .catch( (error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        if ( errorCode == 'auth/email-already-in-use' ){
          alert( 'An account already exists with the given email address.' )
        } else if ( errorCode == 'auth/invalid-email' ){
          alert( 'Email address provided is not valid.' )
        }
        console.log(errorMessage)
      })

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword (email, password)
      .catch( (error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        if ( errorCode == 'auth/invalid-email' ){
          alert( 'Email address provided is not valid.' )
        } else if ( errorCode == 'auth/user-not-found' ){
          alert( 'There is no account/user associated with this email.' )
        } else if ( errorCode == 'auth/wrong-password' ){
          alert( 'The password entered does not match the record on our database. Please try again.' )
        }
        console.log(errorMessage)
      })

  doSignOut = () => this.auth.signOut ();

  doPasswordReset = email => this.auth.sendPasswordResetEmail (email);

  doSendVerificationViaEmail = name =>
    this.auth.currentUser
      .updateProfile ({displayName: name})
      .then (res =>
        this.auth.currentUser.sendEmailVerification ({
          url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
        })
      )
      .catch (err => console.log (err));

  doSignInWithGoogle = () => this.auth.signInWithPopup (this.googleProvider)
      .catch( (error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        if ( errorCode == 'auth/account-exists-with-different-credential' ){
          alert( 'The email provided is associated with an existing account in our database. Have you signed up for our services using that email?' )
        } else if ( errorCode == 'auth/popup-blocked' ){
          alert( 'Please enable popup for our website to proceed.' )
        } else if ( errorCode == 'auth/popup-closed-by-user' ){
          alert( 'The popup was closed before the login was completed. Please click "Log In with Google" to continue.' )
        }
        console.log(errorMessage)
      })
}

export default Firebase;
