import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAtHEZiaLxmnk1-ZI2LMi4DFFAwWgpGmeY",
    authDomain: "desvolarweb.firebaseapp.com",
    databaseURL: "https://desvolarweb.firebaseio.com",
    projectId: "desvolarweb",
    storageBucket: "desvolarweb.appspot.com",
    messagingSenderId: "582468649470"
  };
  firebase.initializeApp(config);

export const firebaseAuth = firebase.auth
// export const ref = firebase.database().ref()