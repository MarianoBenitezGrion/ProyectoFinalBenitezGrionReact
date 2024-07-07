import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB5RR-UIog3g0Ppom3KDq3u8h0-p9jRj-w",
  authDomain: "proyectofinal-85666.firebaseapp.com",
  projectId: "proyectofinal-85666",
  storageBucket: "proyectofinal-85666.appspot.com",
  messagingSenderId: "409899434710",
  appId: "1:409899434710:web:7384893020d36798783f77",
  measurementId: "G-JXGS4YE5GB"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
