// Countdown to the last session. Change the date on the next line.
var END = new Date("2026-12-23T19:00:00+08:00");

// 1. Countdown boxes (the "--" placeholders in the page)
var boxes = [].slice.call(document.querySelectorAll("*")).filter(function (e) {
  return e.children.length === 0 && e.textContent.trim() === "--";
});
function tick() {
  var d = Math.max(0, END - Date.now());
  var v = [Math.floor(d / 864e5), Math.floor(d / 36e5) % 24, Math.floor(d / 6e4) % 60, Math.floor(d / 1e3) % 60];
  boxes.forEach(function (e, i) { e.textContent = String(v[i % 4]).padStart(2, "0"); });
}
tick();
setInterval(tick, 1000);

// 2. Fade-in on scroll (adds the is-in class the stylesheet expects)
var items = [].slice.call(document.querySelectorAll(".reveal, .reveal-img"));
function show(e) { e.classList.add("is-in"); }
function check() {
  var h = window.innerHeight;
  items.forEach(function (e) {
    if (e.getBoundingClientRect().top < h * 0.92) show(e);
  });
}
window.addEventListener("scroll", check, { passive: true });
window.addEventListener("resize", check);
check();
setTimeout(function () { items.forEach(show); }, 4000); // safety: never leave anything hidden
