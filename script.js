const tg = window.Telegram?.WebApp;

if (tg) {
    tg.ready();
    tg.expand();
}

const withdrawBtn = document.querySelector(".balance-card button");

if (withdrawBtn) {
    withdrawBtn.addEventListener("click", () => {
        window.location.href = "withdraw.html";
    });
}

const actions = document.querySelectorAll(".action");

actions.forEach(action => {
    action.addEventListener("click", () => {
        // a ট্যাগ হওয়ায় href নিজে থেকেই কাজ করবে
    });
});

const balance = document.getElementById("balance");

if (balance) {
    balance.innerText = "৳50.00";
}
function openFacebook() {
    window.open("https://www.facebook.com/share/1ERvH8URum/", "_blank");
}

function openYouTube() {
    window.open("https://www.youtube.com/@EasyCash-y2c", "_blank");
}
