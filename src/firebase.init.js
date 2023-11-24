// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZyRF9OdOTipsKRlUBIM8tEhcm7kNdinY",
  authDomain: "e-commerce-seo.firebaseapp.com",
  projectId: "e-commerce-seo",
  storageBucket: "e-commerce-seo.appspot.com",
  messagingSenderId: "594642824558",
  appId: "1:594642824558:web:fc6e9d0c56a0ecc35ca57f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;