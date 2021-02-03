const tl = gsap.timeline({default:{ease:'power1.out'}});

tl.to(".cover", {x:"100%", duration:1});
tl.fromTo(".cabecera", {opacity:0}, {opacity:1, duration:1.5});