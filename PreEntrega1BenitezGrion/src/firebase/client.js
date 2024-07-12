import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyD30vqZ031Met3YBs_J0njTIOvn79C3iyc",
  authDomain: "proyecto-final-benitez-grion.firebaseapp.com",
  projectId: "proyecto-final-benitez-grion",
  storageBucket: "proyecto-final-benitez-grion.appspot.com",
  messagingSenderId: "812868406827",
  appId: "1:812868406827:web:012f376a5297e85d1d646e"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
