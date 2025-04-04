import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHBAPnMymnHWX11ioMAvU_TIweC7P6KPQ",
  authDomain: "appfotos-40ed7.firebaseapp.com",
  projectId: "appfotos-40ed7",
  storageBucket: "appfotos-40ed7.firebasestorage.app",
  messagingSenderId: "541990118553",
  appId: "1:541990118553:web:000e5ee17245892b374408",
  measurementId: "G-EKLPEB8KYV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
export const db = getFirestore(app);

