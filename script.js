// Ham & Cross Click & Hide Script Start.
document.querySelector('.Cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
  document.querySelector('.sidebar').classList.toggle('sidebarGo');
  if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
    document.querySelector('.ham').style.display = 'inline';
    document.querySelector('.Cross').style.display = 'none';
  }
  else {
    document.querySelector('.ham').style.display = 'none';
    setTimeout (() => {
      document.querySelector('.Cross').style.display = 'inline'; 
       
    }, 350);
  }
})

// Placeholder Hide and Show Script Start 
document.addEventListener('DOMContentLoaded', function () {
  const inputSearch = document.querySelector('.input-search');

  inputSearch.addEventListener('focus', function () {
    inputSearch.classList.remove('placeholder-hidden');
  });

  inputSearch.addEventListener('blur', function () {
    if (!inputSearch.value.trim()) {
      inputSearch.classList.add('placeholder-hidden');
    }
  });
});



// Slider Script Is Start
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

