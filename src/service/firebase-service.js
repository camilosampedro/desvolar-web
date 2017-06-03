import {firebaseAuth} from '../config/constants'

var authInfo = {};

export function auth() {
  var provider = new firebaseAuth.GoogleAuthProvider();
  provider.setCustomParameters({hd: "udea.edu.co"});

  return firebaseAuth().signInWithPopup(provider).then(function(result) {
    console.log('Result', result);
    authInfo = {
      email: result.user.email,
      name: result.user.displayName,
      refreshToken: result.user.refreshToken,
      idToken: result.credential.idToken,
      uid: result.user.uid,
    }
    return result;
  });
}

export function logout() {
  return firebaseAuth().signOut();
}

export function getAuthInfo() {
  return authInfo;
}

export function isLoggedIn() {
  if (authInfo.idToken) {
    return true;
  } else {
    return false;
  }
}
