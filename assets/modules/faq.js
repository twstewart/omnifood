const faqHeaders = document.querySelectorAll(".faq-header");

faqHeaders.forEach((faqHeader) => {
  faqHeader.addEventListener("click", handleClick);
  faqHeader.addEventListener("keydown", handleKeyPress);
});

function handleKeyPress(e) {
  if (e.key === "Enter") {
    toggleFaq(e.currentTarget);
  }
}

function handleClick(e) {
  toggleFaq(e.currentTarget);
}

function toggleFaq(faqHeader) {
  faqHeader.classList.toggle("faq-header--is-active");
  faqHeader.nextElementSibling.classList.toggle("faq-footer--is-active");
}
