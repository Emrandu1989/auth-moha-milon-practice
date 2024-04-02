// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA20tPoQ1ZKyB7CNr5yLU_31ufy-0NwHQ",
  authDomain: "auth-moha-milon-practice-6058c.firebaseapp.com",
  projectId: "auth-moha-milon-practice-6058c",
  storageBucket: "auth-moha-milon-practice-6058c.appspot.com",
  messagingSenderId: "685692134080",
  appId: "1:685692134080:web:1c94734330a5cd9494c325"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
