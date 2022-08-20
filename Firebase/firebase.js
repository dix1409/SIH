// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTAQhl0PtXfznumCJjETt_p9OdeDVUoXc",
  authDomain: "smarttrolly-9ed88.firebaseapp.com",
  databaseURL: "https://smarttrolly-9ed88-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smarttrolly-9ed88",
  storageBucket: "smarttrolly-9ed88.appspot.com",
  messagingSenderId: "525092302197",
  appId: "1:525092302197:web:e35d03cd2a482420b8f73c",
  measurementId: "G-1G7DCYPDTP"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const store =getFirestore(app);

export {store}