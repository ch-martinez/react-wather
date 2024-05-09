// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATFhtOXVj1nJasEAwpwClcGFJJICWN9_g",
  authDomain: "ch-react-weather.firebaseapp.com",
  projectId: "ch-react-weather",
  storageBucket: "ch-react-weather.appspot.com",
  messagingSenderId: "229653224687",
  appId: "1:229653224687:web:32f8797ddfea94c22c4f1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)