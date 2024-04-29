const sliderElement = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide img'); // Change this selector
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;
let isPlaying = false;
let intervalId = null;

function nextSlide() {
  slides[currentSlide].classList.remove('slide');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('slide');
}

function prevSlide() {
  slides[currentSlide].classList.remove('slide');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('slide');
}

function startAutoplay() {
  isPlaying = true;
  intervalId = setInterval(nextSlide, 3000);
}

function stopAutoplay() {
  isPlaying = false;
  if (intervalId) {
    clearInterval(intervalId);
  }
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

startAutoplay();

sliderElement.addEventListener('mouseover', stopAutoplay);
sliderElement.addEventListener('mouseout', startAutoplay);
