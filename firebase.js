import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA1ZhfhVDUSuMJBso1HOSdrgyVecneEW7Y",
  authDomain: "easycash-f6a8e.firebaseapp.com",
  projectId: "easycash-f6a8e",
  storageBucket: "easycash-f6a8e.firebasestorage.app",
  messagingSenderId: "699730178527",
  appId: "1:699730178527:web:62eb4605ddd1acacde146a",
  measurementId: "G-8BKYR0GY09"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.db = db;
