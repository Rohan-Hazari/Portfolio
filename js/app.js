const togglebtn = document.querySelector(".toggle-btn");
const navbar = document.querySelector(".navbar");
const links = document.querySelector(".links");

togglebtn.addEventListener("click", function () {
  console.log(links.classList);
  console.log(navbar.classList);
  links.classList.toggle("show-links");
  navbar.classList.toggle("show-navbarpad");
});

const preloader = document.querySelector(".preloader");
const body = document.querySelector(".sub-body");

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
  body.style.display = "none";
  setTimeout(() => {
    preloader.style.display = "none";
    body.style.display = "block";
  }, 150);
});
