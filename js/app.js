
//does this appear in github?

const togglebtn = document.querySelector(".toggle-btn");
const navbar = document.querySelector(".navbar");
const links = document.querySelector(".links");

togglebtn.addEventListener("click",function(){
    console.log(links.classList);
    console.log(navbar.classList);
    links.classList.toggle("show-links");
    navbar.classList.toggle("show-navbarpad");

});


