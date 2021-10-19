import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDvZJ5iNExix9IE1uqVYeZrkMgQxY-2K0s",
  authDomain: "crwn-db-2b100.firebaseapp.com",
  projectId: "crwn-db-2b100",
  storageBucket: "crwn-db-2b100.appspot.com",
  messagingSenderId: "719845571022",
  appId: "1:719845571022:web:fa261ac2cd8ffdd8a5539f",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;