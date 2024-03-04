const icon = document.querySelector(".menu_icon");
const nav_bar = document.querySelector(".nav_bar");

icon.addEventListener("click", ()=>{
    nav_bar.classList.toggle("nav");
})

// ........... Swiper ...........

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 25,
    freeMode: true,
    
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});