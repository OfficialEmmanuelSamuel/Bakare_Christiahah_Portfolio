import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBUabr1DG1zILv2TnG7hrFkqhkCPT0c60g",
  authDomain: "christianah-client-review.firebaseapp.com",
  projectId: "christianah-client-review",
  storageBucket: "christianah-client-review.firebasestorage.app",
  messagingSenderId: "991283370275",
  appId: "1:991283370275:web:980644274ec7a63b611496",
  measurementId: "G-L8M3YM1L5L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
