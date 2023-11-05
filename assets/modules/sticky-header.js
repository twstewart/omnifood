const hero = document.querySelector("#hero");
const siteHeader = document.querySelector("#site-header");

const opts = {
  root: null,
  threshold: 0,
  rootMargin: -siteHeader.clientHeight + "px",
};

const obs = new IntersectionObserver((entries) => {
  const entry = entries[0];

  if (!entry.isIntersecting) {
    document.body.classList.add("sticky-header");
  } else {
    document.body.classList.remove("sticky-header");
  }
}, opts);

obs.observe(hero);
