// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3OM6CyBTODypcZYOmMiQ3nuA0awFfXSw",
  authDomain: "gis-inventory-e9bda.firebaseapp.com",
  projectId: "gis-inventory-e9bda",
  storageBucket: "gis-inventory-e9bda.appspot.com",
  messagingSenderId: "486464316800",
  appId: "1:486464316800:web:b2a445dc62e7faddbc8d65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);