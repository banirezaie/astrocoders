import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB-VuNFq8GnXnGldqZMrIf6sfp9VFFtVNA",
  authDomain: "astrocoders.firebaseapp.com",
  databaseURL: "https://astrocoders.firebaseio.com",
  projectId: "astrocoders",
  storageBucket: "astrocoders.appspot.com",
  messagingSenderId: "2750250289",
  appId: "1:2750250289:web:a295f850f40944bc768410",
  measurementId: "G-8ES6VWV752",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export function googleSignout(successHandler) {
  return firebase
    .auth()
    .signOut()

    .then(
      function () {
        console.log("Signout Succesfull");
        successHandler();
      },
      function (error) {
        console.log("Signout Failed");
      }
    );
    
}
