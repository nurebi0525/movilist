import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBXSKHO5AcKE-iroLnhmdfDz_0VbobA6So",
  authDomain: "movies-eaf61.firebaseapp.com",
  databaseURL: "https://movies-eaf61-default-rtdb.firebaseio.com",
  projectId: "movies-eaf61",
  storageBucket: "movies-eaf61.firebasestorage.app",
  messagingSenderId: "834852357793",
  appId: "1:834852357793:web:61ba9c6fb5cb16c9ef12e0",
  measurementId: "G-YJWWGZCL31"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app, analytics};