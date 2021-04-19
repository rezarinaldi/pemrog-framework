import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIyZImlK3NRmtWley8svkA5WzFtTYlGrE",
  authDomain: "pbf-modul11.firebaseapp.com",
  projectId: "pbf-modul11",
  storageBucket: "pbf-modul11.appspot.com",
  messagingSenderId: "453476016596",
  appId: "1:453476016596:web:ab7bc1020460a8529e7641",
  measurementId: "G-3HCZQVEZG7",
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
