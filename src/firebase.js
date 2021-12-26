// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSCpLsBKp1FVasmiqieAFMWKOcxMlmWUg",
  authDomain: "todos-9eea0.firebaseapp.com",
  projectId: "todos-9eea0",
  storageBucket: "todos-9eea0.appspot.com",
  messagingSenderId: "1022928844925",
  appId: "1:1022928844925:web:ff67938c7150178d8a9914",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
