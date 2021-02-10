//inicio de página//

const tl = gsap.timeline({ default: { ease: 'power1.out' } });

tl.to(".cover", { x: "100%", duration: 1 });
tl.fromTo(".cabecera", { opacity: 0 }, { opacity: 1, duration: 1.5 });

//slider de documentos//

const containerSlide = document.querySelector(".estudios__img-slider");
const slideImg = document.querySelectorAll(".estudios__img-slider img");
const containerDoc = document.querySelector(".estudios__img-doc");

//buttons
const btnIzquierdo = document.querySelector("#prevButton");
const btnDerecho = document.querySelector("#nextButton");
const btnLupaMas = document.querySelector("#lupaMasBtn");
const btnLupaMenos = document.querySelector("#lupaMenosBtn");

//size
var cont = 1;
var size = slideImg[0].clientWidth;
containerSlide.style.transform = "translateX(" + -size * cont + "px)";

function sizeSlide() {
    size = slideImg[0].clientWidth;
    containerSlide.style.transform = "translateX(" + -size * cont + "px)";
}

//Listeners
btnDerecho.addEventListener('click', () => {
    if (cont >= slideImg.length - 1) return;
    containerSlide.style.transition = "transform 0.4s ease-in-out";
    cont++;
    containerSlide.style.transform = "translateX(" + (-size * cont) + "px)";
});

btnIzquierdo.addEventListener('click', () => {
    if (cont <= 0) return;
    containerSlide.style.transition = "transform 0.4s ease-in-out";
    cont--;
    containerSlide.style.transform = "translateX(" + (-size * cont) + "px)";
});

containerSlide.addEventListener('transitionend', () => {
    if (slideImg[cont].id === "lastClone") {
        containerSlide.style.transition = "none";
        cont = slideImg.length - 2;
        containerSlide.style.transform = "translateX(" + (-size * cont) + "px)";
    }

    if (slideImg[cont].id === "firstClone") {
        containerSlide.style.transition = "none";
        cont = slideImg.length - cont;
        containerSlide.style.transform = "translateX(" + (-size * cont) + "px)";
    }
});

//Botones de lupa

btnLupaMas.addEventListener('click', () => {
    containerDoc.classList.remove("estudios__img-doc--size");
    containerDoc.style.width = "100%";
    sizeSlide();
    btnLupaMas.classList.remove("btn-lupa__event-Visible");
    btnLupaMas.classList.add("btn-lupa__event-noVisible");
    btnLupaMenos.classList.add("btn-lupa__event-Visible");
    document.querySelector(".estudios__img-pc").style.display = "none";
    document.querySelector(".estudios__escuela").style.display = "none";
    containerDoc.style.top = "0px";
    if (window.matchMedia("(min-width: 900px)").matches){
        containerDoc.style.left = "";
    }
    else{
        containerDoc.style.left = "0px";
    }
});

btnLupaMenos.addEventListener('click', () => {
    containerDoc.style.width = "";
    containerDoc.classList.add("estudios__img-doc--size");
    sizeSlide();
    btnLupaMenos.classList.remove("btn-lupa__event-Visible");
    btnLupaMenos.classList.add("btn-lupa__event-noVisible");
    btnLupaMas.classList.add("btn-lupa__event-Visible");
    document.querySelector(".estudios__img-pc").style.display = "block";
    document.querySelector(".estudios__escuela").style.display = "block";
    containerDoc.style.top = "";
    containerDoc.style.left = "";
});

//menu
const menuEstudios = document.querySelector(".estudios");
const intro = document.querySelector(".intro");

var menuButton = document.querySelectorAll(".menu-button");
for (var i = 0; i < menuButton.length; i++) {
    menuButton[i].addEventListener("click", () => {
        tl.to(".menu", { y: "0", duration: 1 });
        tl.fromTo("#menu-lista", { opacity: 0 }, { opacity: 1, duration: 1.5 });
    });
}

//menu-home
document.querySelector(".menu-home").addEventListener("click", () => {
    if (menuEstudios.style.display == "flex") {
        menuEstudios.style.display = "none";
        intro.style.display = "flex";
        tl.to(".menu", { y: "-100%", duration: 1 });
    }
    else{
        tl.to(".menu", { y: "-100%", duration: 1 });
    }
});


//menu-estudios
document.querySelector("#menu-estudios").addEventListener("click", () => {
    intro.style.display = "none";
    menuEstudios.style.display = "flex";
    tl.to(".menu", { y: "-100%", duration: 1 });
    tl.fromTo(".estudios", { opacity: 0 }, { opacity: 1, duration: 1 });
    sizeSlide();
});