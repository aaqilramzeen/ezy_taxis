import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-K2f5xv-bJbEbN4pdk8U5b9xBg114qls",
  authDomain: "ezy-taxis.firebaseapp.com",
  projectId: "ezy-taxis",
  storageBucket: "ezy-taxis.appspot.com",
  messagingSenderId: "126828536331",
  appId: "1:126828536331:web:009ab87bea4faa93ef5d0e",
  measurementId: "G-D0QK0JKXSV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export { app, db };
