import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

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

const tg = window.Telegram?.WebApp;

if (tg) {
  tg.ready();

  const user = tg.initDataUnsafe?.user;

  if (user) {
    createUser(user);
  }
}

async function createUser(user) {

  const userRef = doc(db, "users", String(user.id));

  const snap = await getDoc(userRef);

  if (!snap.exists()) {

    await setDoc(userRef, {
      id: user.id,
      name: user.first_name,
      username: user.username || "",
      balance: 50,
      referral: 0,
      joined: new Date().toISOString()
    });

  }

}
