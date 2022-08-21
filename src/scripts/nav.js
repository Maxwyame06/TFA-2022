"use strict"
// nav case-study
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})


var time = Math.random();

var neon = document.querySelector('.neon');
neon.style.setProperty('--animation-time', time +'s');

function changeAnimationTime() {
  var animationDuration = Math.random();
}
setInterval(changeAnimationTime, 2000);




const scrollIndicator = document.querySelector(".scroll-indicator");
const content = document.querySelector(".content");

const observer = new IntersectionObserver(handleIntersect)

observer.observe(content);

function handleIntersect(entries){
  const el = entries[0];
  if(el.isIntersecting){
    window.addEventListener("scroll", indicatorAnimation)
  } else if(!el.isIntersecting){
    window.addEventListener("scroll", indicatorAnimation)
  }
}

function indicatorAnimation() {
  if(window.scrollY > content.offsetTop){
    // console.log("Hello");
    const percentage = ((window.scrollY - content.offsetTop)/
    content.scrollHeight * 100).toFixed(2);
    console.log(percentage);
    scrollIndicator.style.transform = `scaleX(${(percentage / 100)})`
  }else {
    scrollIndicator.style.transform = `scaleX(0)`
  }
}