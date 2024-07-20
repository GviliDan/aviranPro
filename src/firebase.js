// src/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE0sNkA0dYyzGeiDXUmf32VF6_k89cYNQ",
  authDomain: "aviranpro-38252.firebaseapp.com",
  projectId: "aviranpro-38252",
  storageBucket: "aviranpro-38252.appspot.com",
  messagingSenderId: "225929348782",
  appId: "1:225929348782:web:8d2ad891453b77901e4f3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);

export { storage, ref, listAll, getDownloadURL };
