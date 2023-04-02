import "firebase/auth";
// import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBlK9GTVnMzV4erzgSDyqhi0iG5PDUPGdU",
  authDomain: "react-firebase-altamedia.firebaseapp.com",
  projectId: "react-firebase-altamedia",
  storageBucket: "react-firebase-altamedia.appspot.com",
  messagingSenderId: "418619704551",
  appId: "1:418619704551:web:e0d638e399824d20edce42",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider };
