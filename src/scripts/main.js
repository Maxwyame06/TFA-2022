"use strict"

//Burger menu
 function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
      .querySelector(".custom_menu-btn")
      .classList.toggle("menu_btn-style");      
}


// Texte scramble source: https://jsfiddle.net/soulwire/08e3dLk2
class TextRotatif {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const longeur = Math.max(oldText.length, newText.length)
    const valeur = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < longeur; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    this.frame = 0
    this.update()
    return valeur
  }
  update() {
    let sortie = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        sortie += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        sortie += `<span class="dud">${char}</span>`
      } 
    }
    this.el.innerHTML = sortie
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}
const phrases = [
  "Profiter de l'application, elle est gratuite !",
  "Tester l'application ci-dessous.",
  "Faites vous aider",
  "N'ayez pas peur d'en parler !",
  "Ce n'est pas un sujet tabou.",
]

const element = document.querySelector('.text')
const tr = new TextRotatif(element)

let compteur = 0
const next = () => {
  tr.setText(phrases[compteur]).then(() => {
    setTimeout(next, 1300)
  })
  compteur = (compteur + 1) % phrases.length
}

next()




gsap.registerPlugin(ScrollTrigger);


const titre = document.querySelector('.titre-js');
const txt1 = document.querySelector('.h2--landing');
const txt2 = document.querySelector('.h3--landing');
const btn = document.querySelector('.btn-js');

const TL1 = new TimelineMax();

TL1
.from(titre, 1, {y: -300, oppacity: 0})
.from(txt1, 1, {opacity: -2, scrub: 0.5}, '-=0.4')
.from(txt2, 1, {opacity: 0}, '-=0.8')
.from(btn, 1, {opacity: 0}, '-=0.12')

TL1.play();

//AVIS
let avis = gsap.timeline({
  scrollTrigger:{
    trigger:'.avis-contener',
    start: "center bottom",
    toggleActions: "play reverse restart reset",
    endTrigger: '.section_download',
    end: "top center",
    // markers: "true",
  }
});
avis.from(".photo-avis1, .photo-avis2, .photo-avis3, .photo-avis4",{
  y: -150,
  oppacity: 0,
})
avis.from(".h2-avis1, .h2-avis2, .h2-avis3, .h2-avis4",{
  y: 100,
  scale:3,
})
avis.from(".p-avis1, .p-avis2, .p-avis3, .p-avis4",{
  x: -215,
});

// ICON
let ic = gsap.timeline({
  scrollTrigger:{
    trigger: '.infinite-slider',
    start: "top center",
    endTrigger: ".end",
    end: 'bottom center',
    scrub: 0.5,
    //  markers: "true",
    toggleActions: "play reverse play reverse",
   
  }
});
ic.from(".icon1", {
  x: 1350,
  oppacity: 0,
  duration: 1.5
})
.from(".icon2",{
  x: 900,
  oppacity: 0,   duration: 1
}, "-=1")

.from(".icon3",{
  x: 600,
  oppacity: 0,
  duration: 1
}, "-=1");


// TEMPLATE 1
let template = gsap.timeline({
  scrollTrigger:{
    trigger: '.end',
    start:'bottom center',
    endTrigger:'',
    end:'',
    scrub: 0.5,
    // markers: "true",
    toggleActions: "play reverse play reverse",
  }
});
template.from(".template1",{
  x:400,
  rotationY:180,
});


let para = gsap.timeline({
  scrollTrigger:{
    trigger: '.fonct',
    start:'top center',
    endTrigger:'.image-template',
    end:'center center',
    scrub: 0.5,
    // markers: "true",
  }
});
para.from(".png-1",{
  x:-450,
})
.from(".p-temp",{
  y:400,
  stagger: 0.1
});

// TEMPLATE 2
let template2 = gsap.timeline({
  scrollTrigger:{
    trigger: '.png-1',
    start:'bottom center',
    scrub: 0.5,
    //  markers: "true",
    toggleActions: "play reverse play reverse",
  }
});
template2.from(".template2",{
  x:400,
  rotationY:180,
});


let para2 = gsap.timeline({
  scrollTrigger:{
    trigger: '.end-template',
    start:'top center',
    endTrigger:'.bla',
    end:'center center',
    scrub: 0.5,
    //markers: "true",
  }
});
para2.from(".png-2",{
  x:-450,
})
.from(".p-temp2",{
  y:400,
  stagger: 0.1
});







