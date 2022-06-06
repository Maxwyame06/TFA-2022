"use strict"


import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
<script src="gsap-public/minified/gsap.min.js"></script>

      let tl = gsap.timeline({
        scrollTrigger:{
          trigger: '.mockup-landing',
          start: "center",
          end:".section__footer",
          // scrub: true,
          markers: true,
          toggleActions: "play none play reverse"

        }
      });
      tl.from(".set2",{
        y: 200,
        oppacity: 0,
        duration: 1
      }, "-=1");

      let tel = gsap.timeline({
        scrollTrigger:{
          trigger: '.box3',
          start: "bottom",
          end:".section__footer",
          // scrub: true,
          markers: true,
          toggleActions: "play none play reverse"

        }
      });
      tel.from(".set4",{
        y: 200,
        oppacity: 0,
        duration: 1
      }, "-=1");
      

      let ic = gsap.timeline({
        scrollTrigger:{
          trigger: '.infinite-slider',
          start: "-250px",
          // scrub: true,
          markers: true,
          toggleActions: "play none play reverse"
        }
      });
      ic.from(".icon1", {
        x: 1350,
        oppacity: 0,
        duration: 1.5
      })
      .from(".icon2",{
        x: 900,
        oppacity: 0,
        duration: 1
      }, "-=1")

      .from(".icon3",{
        x: 600,
        oppacity: 0,
        duration: 1
      }, "-=1");




 function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
      .querySelector(".custom_menu-btn")
      .classList.toggle("menu_btn-style");
  }