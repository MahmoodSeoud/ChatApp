// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5YaUq6RIc_NvbD1034pfaDCYqCJxNly4",
  authDomain: "superchat-e05ce.firebaseapp.com",
  databaseURL: "https://superchat-e05ce-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "superchat-e05ce",
  storageBucket: "superchat-e05ce.appspot.com",
  messagingSenderId: "115275412586",
  appId: "1:115275412586:web:e70bb4a6f7f27b44130613",
  measurementId: "G-S87TECVGYL"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

