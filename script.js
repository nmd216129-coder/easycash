const facebookBtn = document.getElementById("facebookTask");
const youtubeBtn = document.getElementById("youtubeTask");

if (facebookBtn) {
  facebookBtn.addEventListener("click", function () {
    window.open("https://www.facebook.com/share/1G3sZJ1Gpj/", "_blank");
    alert("Facebook Task Started.\nReward: ৳25");
  });
}

if (youtubeBtn) {
  youtubeBtn.addEventListener("click", function () {
    window.open("https://www.youtube.com/@EasyCash-y2c", "_blank");
    alert("YouTube Task Started.\nReward: ৳25");
  });
}
