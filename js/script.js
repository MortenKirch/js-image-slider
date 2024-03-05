"Use Strict"
const bodyElem = document.querySelector("body");
const slidesElem = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;

leftBtn.addEventListener("click", () =>{
    activeSlide--;
    if(activeSlide < 0){
        activeSlide = slidesElem.length - 1;
    }
    setActiveSlides();
    console.log("Current active slide:", activeSlide);
})

rightBtn.addEventListener("click", () =>{
    activeSlide++;
    if(activeSlide > slidesElem.length - 1){
        activeSlide = 0;
    }
    
    setActiveSlides();
    console.log("Current active slide:", activeSlide);

});

function setActiveSlides(){
    slidesElem.forEach((item) => item.classList.remove("active"));
    slidesElem [activeSlide].classList.add("active");
   
    
};

