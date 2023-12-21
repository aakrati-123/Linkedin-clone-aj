import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, orderBy } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const config = {
  apiKey: "AIzaSyAvjUyYv5P57WowCOqGoDJTQpurwgSRm5U",
  authDomain: "aakrati-linkedin-clone.firebaseapp.com",
  projectId: "aakrati-linkedin-clone",
  storageBucket: "aakrati-linkedin-clone.appspot.com",
  messagingSenderId: "795862302466",
  appId: "1:795862302466:web:7304f08a766a6f9c228c1b",

};

const app = initializeApp(config);

const db = getFirestore();

export const postsRef = collection(db, "posts");

export const postsQuery = query(postsRef, orderBy("timestamp", "desc"));

export const auth = getAuth(app);

export const storage = getStorage(app);

