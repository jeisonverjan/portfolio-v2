// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRkq1YlIl6-xgByn_agLvBM5_rMY2Mv-0",
  authDomain: "portfoliio-8e824.firebaseapp.com",
  projectId: "portfoliio-8e824",
  storageBucket: "portfoliio-8e824.appspot.com",
  messagingSenderId: "148667588294",
  appId: "1:148667588294:web:c225ce88554611482581c7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
