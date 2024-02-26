const icon = document.querySelector(".menu_icon");
const nav_bar = document.querySelector(".nav_bar");

icon.addEventListener("click", ()=>{
    nav_bar.classList.toggle("nav");
})