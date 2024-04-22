import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW_mKdqGXGEwW_y_KR-SUKqzFuefEbgOI",
  authDomain: "waretgold.firebaseapp.com",
  projectId: "waretgold",
  storageBucket: "waretgold.appspot.com",
  messagingSenderId: "647013017000",
  appId: "1:647013017000:web:ccb6346f2f98cee790e99d",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
