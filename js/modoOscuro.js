const btn = document.querySelector(".switch");
const theme = document.querySelector("#dark-theme");

btn.addEventListener("click", function() {
  if (theme.getAttribute("href") == "style.css") {
    theme.href = "modoOscuro.css";
  } else {
    theme.href = "style.css";
  }
});