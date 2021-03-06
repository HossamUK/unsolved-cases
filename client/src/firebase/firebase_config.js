import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBnehRK8v5b_OcX4OOw43eBWM5QFezLXjM",
  authDomain: "unsolved-case.firebaseapp.com",
  projectId: "unsolved-case",
  storageBucket: "unsolved-case.appspot.com",
  messagingSenderId: "592846297923",
  appId: "1:592846297923:web:7a1564d385fa62279c6df6",
  measurementId: "G-2DZY8KQZQ4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
export const auth = getAuth(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();

export default db;
