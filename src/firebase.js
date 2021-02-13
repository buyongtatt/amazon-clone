import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD4wHP6oXV-c1Oc8H4JJeNktjA7zf0oy8",
  authDomain: "cl-63edc.firebaseapp.com",
  projectId: "cl-63edc",
  storageBucket: "cl-63edc.appspot.com",
  messagingSenderId: "427091549115",
  appId: "1:427091549115:web:97e412319bdd6a21f6829e",
  measurementId: "G-BP287BVJWZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
