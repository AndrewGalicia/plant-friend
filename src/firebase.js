// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMZbKqVZ_-xJdQOaRkV2yHnFQLCTHEYYQ",
  authDomain: "plant-friend-14d49.firebaseapp.com",
  projectId: "plant-friend-14d49",
  storageBucket: "plant-friend-14d49.appspot.com",
  messagingSenderId: "217386144233",
  appId: "1:217386144233:web:cb7096a6d4565377d9fb78",
  measurementId: "G-C4NYF1WNQ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) =>{
      console.log(result)

  }).catch((error) => {
    console.log(error)
  });
};
