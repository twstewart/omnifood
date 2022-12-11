const links = document.querySelectorAll("a");
const siteHeader = document.querySelector("#site-header");
const sectionEls = document.querySelectorAll("section");
const sections = Array.from(sectionEls).map((section) => section.getAttribute("id"));

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (sections.includes(href.replace("#", ""))) {
      const sectionEl = document.querySelector(href).offsetTop;

      window.scrollTo({
        top: sectionEl - siteHeader.offsetHeight,
        behavior: "smooth",
      });
    }
  });
});
