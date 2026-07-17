
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment
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

export { db };

const tg = window.Telegram?.WebApp;

if (tg) {
  tg.ready();
  tg.expand();

  const user = tg.initDataUnsafe?.user;

  if (user) {
    createUser(user);
  }
}
async function createUser(user) {

  const userRef = doc(db, "users", String(user.id));
  const snap = await getDoc(userRef);

  // User already exists
  if (snap.exists()) return;

  // User's own referral code
  const refCode = "EC" + user.id;

  // Read referral code from Telegram
  let referredBy = tg.initDataUnsafe?.start_param || "";

  // Create new user
  await setDoc(userRef, {
    id: user.id,
    name: user.first_name || "",
    username: user.username || "",
    balance: referredBy ? 20 : 50,
    referral: 0,
    refCode: refCode,
    referredBy: referredBy,
    joined: new Date().toISOString()
  });

  // Give bonus to referrer
  if (referredBy && referredBy !== refCode) {

    const referrerId = referredBy.replace("EC", "");
    const refUserRef = doc(db, "users", referrerId);

    const refSnap = await getDoc(refUserRef);

    if (refSnap.exists()) {

      await updateDoc(refUserRef, {
        balance: increment(30),
        referral: increment(1)
      });

    }
  }
}
