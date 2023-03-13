// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU9pu443DpEnMnEvx7N-ci3D6Eg9_4neo",
  authDomain: "authentication-a65df.firebaseapp.com",
  projectId: "authentication-a65df",
  storageBucket: "authentication-a65df.appspot.com",
  messagingSenderId: "565782679885",
  appId: "1:565782679885:web:6e9e41d0c071e5c689e704"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();