// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAx9MboJpFSgeIHhShNicoQvN0YQ-mxM1Q",
  authDomain: "flipkart-clone-f5f55.firebaseapp.com",
  projectId: "flipkart-clone-f5f55",
  storageBucket: "flipkart-clone-f5f55.appspot.com",
  messagingSenderId: "519639976819",
  appId: "1:519639976819:web:dfcfcc7af08c9dfd00d306",
  measurementId: "G-JLH28B79KE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
