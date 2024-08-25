import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBJwKdYoRLOVRnlOp2nSVjzRIoZ-4k2HrM",
  authDomain: "fir-auth-a769e.firebaseapp.com",
  projectId: "fir-auth-a769e",
  storageBucket: "fir-auth-a769e.appspot.com",
  messagingSenderId: "230292318490",
  appId: "1:230292318490:web:4fd92c92d96a69f352e4a3",
  measurementId: "G-459VZHC4P5"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth,db };