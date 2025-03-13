import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAlwCJ4dVTtPszzhGWAFqNMGNL4xQHGQA",
  authDomain: "k-ataexpo.firebaseapp.com",
  databaseURL: "https://k-ataexpo-default-rtdb.firebaseio.com",
  projectId: "k-ataexpo",
  storageBucket: "k-ataexpo.appspot.com",
  messagingSenderId: "234677204951",
  appId: "1:234677204951:web:aa1c3f879f5aa38011bd92",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
