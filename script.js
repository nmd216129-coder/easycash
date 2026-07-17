import { db } from "./firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const tg = window.Telegram?.WebApp;

if (tg) {
  tg.ready();
  tg.expand();
}

async function loadBalance() {

  const user = tg?.initDataUnsafe?.user;

  if (!user) return;

  const userRef = doc(db, "users", String(user.id));
  const snap = await getDoc(userRef);

  if (snap.exists()) {

    const data = snap.data();

    const balance = document.getElementById("balance");

    if (balance) {
      balance.innerText = "৳" + data.balance;
    }

  }

}

loadBalance();

const withdrawBtn = document.querySelector(".balance-card button");

if (withdrawBtn) {
  withdrawBtn.addEventListener("click", () => {
    window.location.href = "withdraw.html";
  });
}

window.openFacebook = function () {
  window.open("https://www.facebook.com/share/1ERvH8URum/", "_blank");
};

window.openYouTube = function () {
  window.open("https://www.youtube.com/@EasyCash-y2c", "_blank");
};
