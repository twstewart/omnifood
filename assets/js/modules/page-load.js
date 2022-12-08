const viewport = document.querySelector("meta[name=viewport]");
const year = document.querySelector("#year");

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("preload");
  viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight);

  year.textContent = new Date().getFullYear();
});
