import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, orderBy } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const config = {
  apiKey: "AIzaSyAiVH4B8dffhBOULAY8oEneUzZXbWKSxWY",
  authDomain: "aakrati-linkedin-clone-b2311.firebaseapp.com",
  projectId: "aakrati-linkedin-clone-b2311",
  storageBucket: "aakrati-linkedin-clone-b2311.appspot.com",
  messagingSenderId: "991615798387",
  appId: "1:991615798387:web:ea432df9fa9ca2c4d66e06",
  measurementId: "G-PZVWK1MZSD"
};

const app = initializeApp(config);

const db = getFirestore();

export const postsRef = collection(db, "posts");

export const postsQuery = query(postsRef, orderBy("timestamp", "desc"));

export const auth = getAuth(app);

export const storage = getStorage(app);

