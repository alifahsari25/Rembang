import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, child } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD9daEdtWUmhR20bGG-AU2aL3t67wMYqQ",
  authDomain: "rembang-6e3db.firebaseapp.com",
  databaseURL: "https://rembang-6e3db-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rembang-6e3db",
  storageBucket: "rembang-6e3db.firebasestorage.app",
  messagingSenderId: "701239770321",
  appId: "1:701239770321:web:cd3795790294a3c8e699f0",
  measurementId: "G-QFKH689CGL"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, get, set, child };
