const toggle = document.getElementById("theme-toggle");
const html = document.documentElement;

toggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  toggle.textContent = html.classList.contains("dark") ? "☀️" : "🌙";
});
