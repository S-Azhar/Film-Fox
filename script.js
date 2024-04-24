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


// Auto Slide Loop Script Start.

const carousel = document.querySelector(".carousel"),
  firstImg = carousel.querySelectorAll("img")[0],
  arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false,
  isDragging = false,
  prevPageX,
  prevScrollLeft,
  positionDiff,
  autoSlideInterval; 

const showHideIcons = () => {
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display =
    carousel.scrollLeft == scrollWidth ? "none" : "block";
};

const autoSlide = () => {
  let firstImgWidth = firstImg.clientWidth + 14;
  carousel.scrollLeft += firstImgWidth;
  setTimeout(() => {
    showHideIcons();
    if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
      carousel.scrollLeft = 0; // Reset scroll position to loop the carousel
    }
  }, 60);
};

const startAutoSlide = () => {
  autoSlideInterval = setInterval(autoSlide, 3000);
};

const stopAutoSlide = () => {
  clearInterval(autoSlideInterval);
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    stopAutoSlide();
    let firstImgWidth = firstImg.clientWidth + 14;
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60);
  });
});

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  carousel.classList.add("dragging");
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");

  if (!isDragging) return;
  isDragging = false;
  autoSlide();
};

carousel.addEventListener("mousedown", () => {
  stopAutoSlide();
  dragStart(event);
});
carousel.addEventListener("touchstart", () => {
  stopAutoSlide();
  dragStart(event);
});

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

startAutoSlide();
