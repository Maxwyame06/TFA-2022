"use strict"
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

    tl.from('.text-1', {
        opacity: 0,
        duration: 2,
    })
    .to('.text-1',{ 
        opacity: 0,
        duration: 2,
    }, "+=2")

    .set('.logo-cred',{
        opacity: 1,
    }, "+=1")

    .to('.logo-cred',{
        scale: 0,
        duration: 8,
    })
    .to('.logo-cred',{
        opacity:0,
        duration: 4,
    }, "-=6")


    .from('.text-2',{
        top:'100%',
        duration: 20,
    }, "-+6");