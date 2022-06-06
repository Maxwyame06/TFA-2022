"use strict"
 function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
      .querySelector(".custom_menu-btn")
      .classList.toggle("menu_btn-style");
  }

var slideIndex = 1;
showSlides(slideIndex);

let prevButton = document.querySelector(".slideshow__prev");
if(prevButton){
    prevButton.addEventListener('click', () => {
        plusSlides(-1);
    });
}

let nextButton = document.querySelector(".slideshow__next");
if(nextButton){
    nextButton.addEventListener('click', () => {
        plusSlides(1);
    });
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.querySelectorAll(".slideshow__slides");
    if (n > slides.length) {
        slideIndex = 1;
    } 

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.add("hide");
    }

    slides[slideIndex-1].classList.remove("hide"); 
}


