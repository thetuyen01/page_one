import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWdmKs-Af0IN3PI-wODpEMLtKkgHrlEkY",
  authDomain: "login-gg-ebc58.firebaseapp.com",
  projectId: "login-gg-ebc58",
  storageBucket: "login-gg-ebc58.appspot.com",
  messagingSenderId: "448339567275",
  appId: "1:448339567275:web:87bbc2febb630e6236cdee",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
