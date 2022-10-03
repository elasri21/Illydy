//
const menu = document.querySelector(".hamburger");
const closeMenu = document.querySelector(".close");
const nav = document.querySelector("nav");
menu.addEventListener("click", function() {
    this.style.display = "none";
    nav.style.left = "0";
    closeMenu.style.display = "block";
});
closeMenu.addEventListener("click", function(){
    this.style.display = "none";
    nav.style.left = "-100%";
    menu.style.display = "block";
});

// slider
const sliderBtns = Array.from(document.querySelectorAll(".slider-btns span"));
const slides = Array.from(document.querySelectorAll(".slider"));
sliderBtns.forEach(btn => btn.addEventListener("click", function() {
    for(let i = 0; i < sliderBtns.length; i++) {
        sliderBtns[i].classList.remove("active");
        slides.forEach(slide => slide.style.display = "none");
    }
    this.classList.add("active");
    slides.forEach(slide => {
        if(slide.id == this.dataset.id) {
            slide.style.display = "block";
        }
    })
}))