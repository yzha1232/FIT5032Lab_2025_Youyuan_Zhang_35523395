import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqwakeCbT9HVEGeMiJkgepmRtdrPJsQS4",
  authDomain: "fit5032-lab7-f99ee.firebaseapp.com",
  projectId: "fit5032-lab7-f99ee",
  storageBucket: "fit5032-lab7-f99ee.firebasestorage.app",
  messagingSenderId: "237497636447",
  appId: "1:237497636447:web:afe8e8ef4b3108139a6dea"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export default  db;