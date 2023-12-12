// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD-REg91GmdqlgXbPD0fcWE43FOhv5E898",
  authDomain: "open-source-tsquare.firebaseapp.com",
  databaseURL: "https://open-source-tsquare-default-rtdb.firebaseio.com",
  projectId: "open-source-tsquare",
  storageBucket: "open-source-tsquare.appspot.com",
  messagingSenderId: "852914490414",
  appId: "1:852914490414:web:4a5d771ed704d7775363bf",
  measurementId: "G-27162N4PPC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
