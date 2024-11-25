// Obtém os elementos dos slides
const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");
const slide4 = document.getElementById("slide4");

// Inicializa os slides
slide2.style.display = "none";
slide3.style.display = "none";
slide4.style.display = "none";

// Variável global para controlar o slide atual
let currentSlide = 1;

// Função para alternar os slides
function slide(slide) {
    // Oculta todos os slides e exibe apenas o selecionado
    slide1.style.display = "none";
    slide2.style.display = "none";
    slide3.style.display = "none";
    slide4.style.display = "none";

    if (slide == 1) {
        slide1.style.display = "block";
    } else if (slide == 2) {
        slide2.style.display = "block";
    } else if (slide == 3) {
        slide3.style.display = "block";
    } else if (slide == 4) {
        slide4.style.display = "block";
    }
}

// Função para iniciar o slideshow automático
function startSlideShow() {
    setInterval(() => {
        slide(currentSlide); // Chama a função com o slide atual
        currentSlide++; // Vai para o próximo slide
        if (currentSlide > 4) currentSlide = 1; // Reinicia no slide 1 após o slide 4
    }, 3000); // Intervalo de 3 segundos (3000ms)
}

// Inicia o slideshow automaticamente
//startSlideShow();


function moveToCenter(clickedElement) {
    const slider = document.querySelector(".slider-move");
    const allItems = slider.querySelectorAll("div");

    allItems.forEach(item => item.classList.remove("active"));

    clickedElement.classList.add("active");

    const sliderRect = slider.getBoundingClientRect();
    const clickedRect = clickedElement.getBoundingClientRect();
    const offset = sliderRect.width / 2 - (clickedRect.left + clickedRect.width / 2);

    slider.style.transform = `translateX(${offset}px)`;
}

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider-move");
    const middleItem = slider.querySelectorAll("div")[2]; 
    middleItem.classList.add("active");
});

