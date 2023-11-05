const menuBars = document.querySelector("#menu-bars");
const navLinks = document.querySelectorAll("#navbar a");

menuBars.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("opened");
  document.body.classList.toggle("is-mobile");
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (_e) => {
    if (document.body.classList.contains("is-mobile") && menuBars.classList.contains("opened")) {
      document.body.classList.remove("is-mobile");
      menuBars.classList.remove("opened");
    }
  });
});
