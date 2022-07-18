import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCDwjPUBiQGlv1eUoAekSi_-6RblhccdHc",
  authDomain: "slack-clone-46449.firebaseapp.com",
  projectId: "slack-clone-46449",
  storageBucket: "slack-clone-46449.appspot.com",
  messagingSenderId: "271749133697",
  appId: "1:271749133697:web:9dbc8a5e4d9d7353afa480",
  measurementId: "G-MS8GYHGN9B",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
