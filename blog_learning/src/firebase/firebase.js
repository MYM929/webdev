// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFileStore } from "firebase/filestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPh9vCnfVEV0BlIpa6Qiu6DtdSl_I05lw",
  authDomain: "fir-blog-7f85c.firebaseapp.com",
  projectId: "fir-blog-7f85c",
  storageBucket: "fir-blog-7f85c.appspot.com",
  messagingSenderId: "300114997973",
  appId: "1:300114997973:web:5e53912349af4b51c9685c",
  measurementId: "G-8WF2EC4VTS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFileStore();