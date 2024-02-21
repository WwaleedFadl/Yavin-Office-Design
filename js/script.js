/** @format */
let toTopBtn = document.querySelector("#to-top");

function userScroll() {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-sticky");
      toTopBtn.classList.add("show");
    } else {
      navbar.classList.remove("navbar-sticky");
      toTopBtn.classList.remove("show");
    }
  });
}
document.addEventListener("DOMContentLoaded", userScroll);
// Function Increment Stats
function incrementStats() {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    counter.innerText = 0;
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const c = +counter.innerText;
      const increment = target / 200;
      if (c < target) {
        counter.innerText = Math.ceil(c + increment);
        setTimeout(updateCounter, 2);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
}
document.addEventListener("DOMContentLoaded", incrementStats);
// Scroll To TOP
function ScrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
toTopBtn.addEventListener("click", ScrollToTop);
