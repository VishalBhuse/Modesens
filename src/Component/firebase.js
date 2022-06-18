// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_JlgC3xvUxq7X4k9Q3FULPKDyTClPq_o",
  authDomain: "reactlogin-3cd30.firebaseapp.com",
  projectId: "reactlogin-3cd30",
  storageBucket: "reactlogin-3cd30.appspot.com",
  messagingSenderId: "839394301799",
  appId: "1:839394301799:web:cb3ac0c41a9f7d3d7f81c2",
  measurementId: "G-M4L66Y4WF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

