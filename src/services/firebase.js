// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const apiKey = import.meta.env.VITE_MY_API_KEY;
const authDomain = import.meta.env.VITE_MY_AUTH_DOMAIN;
const projectId = import.meta.env.VITE_MY_PROJECT_ID;
const storageBucket = import.meta.env.VITE_MY_STORAGE_BUCKET;
const messagingSenderId = import.meta.env.VITE_MY_MESSAGING_SENDER_ID;
const appId = import.meta.env.VITE_MY_APP_ID;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
