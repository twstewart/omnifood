const viewport = document.querySelector("meta[name=viewport]");

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("preload");
  viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight);
});
