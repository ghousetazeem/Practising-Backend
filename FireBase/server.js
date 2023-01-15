// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCdXN2aPlLk33Vp4iH9mlJcMDzb9W74Mc4",
  authDomain: "zilo-b1362.firebaseapp.com",
  projectId: "zilo-b1362",
  storageBucket: "zilo-b1362.appspot.com",
  messagingSenderId: "286323466791",
  appId: "1:286323466791:web:a6014b1c6fca46ae502402",
  measurementId: "G-5LK7PXPJS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
