const hamburgerMenu = document.querySelector("#hamburger-menu");
const navLinks = document.querySelectorAll("#navbar a");

hamburgerMenu.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("opened");
  document.body.classList.toggle("is-mobile");
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (_e) => {
    if (document.body.classList.contains("is-mobile") && hamburgerMenu.classList.contains("opened")) {
      document.body.classList.remove("is-mobile");
      hamburgerMenu.classList.remove("opened");
    }
  });
});
