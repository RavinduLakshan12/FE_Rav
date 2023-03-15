// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxpqOey-YX9T7pLkfgY-ODV-UiK_EPE_o",
  authDomain: "dreamepicweb-auth.firebaseapp.com",
  projectId: "dreamepicweb-auth",
  storageBucket: "dreamepicweb-auth.appspot.com",
  messagingSenderId: "721013196390",
  appId: "1:721013196390:web:81796c36f0c76700934fa7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);