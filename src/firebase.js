import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAc9cqMTFoW0dbt8sin2wAojea5v66eYQU",
  authDomain: "findgrapher-2b5bc.firebaseapp.com",
  projectId: "findgrapher-2b5bc",
  storageBucket: "findgrapher-2b5bc.appspot.com",
  messagingSenderId: "273440929528",
  appId: "1:273440929528:web:6685798caa5101bfcead0d",
  measurementId: "G-DE81JG6LLH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
