import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB3GCPSC7Xhb9KSee_Iq5DHBYjFCRZeB-Y",
  authDomain: "mini-blog-71d06.firebaseapp.com",
  projectId: "mini-blog-71d06",
  storageBucket: "mini-blog-71d06.appspot.com",
  messagingSenderId: "1016518320359",
  appId: "1:1016518320359:web:b3c9994d8522bb4d610242"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }
