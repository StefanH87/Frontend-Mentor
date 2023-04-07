const mode = document.getElementById("switch");
const txt = document.querySelector(".dark-mode");

mode.addEventListener("change", () => {
  document.body.classList.toggle("dark_mode");
  // txt.textContent = "haloo";
});
