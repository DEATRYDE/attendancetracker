import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5-aMsCuXZKcMN7QNdnCONQai0wDxmZ5g",
  authDomain: "attendance-tracker-7ceb8.firebaseapp.com",
  projectId: "attendance-tracker-7ceb8",
  storageBucket: "attendance-tracker-7ceb8.appspot.com",
  messagingSenderId: "432009442388",
  appId: "1:432009442388:web:3bbc91bb393b54fe7be9c1",
  measurementId: "G-Z68J6FWY7H",
};

firebase.initializeApp(firebaseConfig);
