import { firebaseAuth } from '../config/constants'

var authInfo = {};

export function auth () {
 var provider = new firebaseAuth.GoogleAuthProvider();
    provider.setCustomParameters({
      hd: "udea.edu.co"
    });

    return firebaseAuth().signInWithPopup(provider).then(function (result){
        authInfo = {
            email: result.user.email,
            name: result.user.displayName,
            token: result.user.refreshToken,
            uid: result.user.uid
        }
        return result;
    });
}

export function logout () {
    return firebaseAuth().signOut();
}

export function getAuthInfo (){
    return authInfo;
}