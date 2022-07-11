// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcw-SmxSonMS1OIuVQqUdKygORV6BY-B0",
  authDomain: "clone-c480d.firebaseapp.com",
  projectId: "clone-c480d",
  storageBucket: "clone-c480d.appspot.com",
  messagingSenderId: "1005599068264",
  appId: "1:1005599068264:web:91cd97452427fd71d8ebdd",
  measurementId: "G-TFK8QR8QF0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
