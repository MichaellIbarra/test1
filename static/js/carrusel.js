const carousel = document.querySelector(".carousel-inner");
const totalSlides = document.querySelectorAll(".carousel-item").length;
// Define una variable index que rastrea la posición actual del carrusel
// y establece su valor inicial en 0.
let index = 0;
// Define una función updateCarousel que actualiza la posición del carrusel
// utilizando la propiedad CSS transform para mover el carrusel a la izquierda
// en función del índice actual. La transformación se calcula multiplicando
// el índice por 100% para mover el carrusel a la izquierda en un porcentaje
function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}
//La funciòn nextSlide incrementa el índice en 1 y lo envuelve al principio si
// supera el número total de diapositivas. Luego llama a updateCarousel para
function nextSlide() {
    index = (index + 1) % totalSlides;
    updateCarousel();
}
// La función prevSlide decrementa el índice en 1 y lo envuelve al final si
// se vuelve negativo. Luego llama a updateCarousel para actualizar la posición
// del carrusel.
function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

document.getElementById("next").addEventListener("click", nextSlide);
document.getElementById("prev").addEventListener("click", prevSlide);

setInterval(nextSlide, 3000); // Cambio automático cada 3 segundos