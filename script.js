const tg = window.Telegram.WebApp;

if (tg) {
    tg.ready();
    tg.expand();
}
document.addEventListener("DOMContentLoaded", () => {

  const actions = document.querySelectorAll(".action");

  actions[0].addEventListener("click", () => {
    alert("Task Page শীঘ্রই যোগ করা হবে");
  });

  actions[1].addEventListener("click", () => {
    alert("Withdraw Page শীঘ্রই যোগ করা হবে");
  });

});
