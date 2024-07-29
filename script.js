// PHOTOS
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const slides = document.querySelectorAll(".slide");

let currentPic = 0;

let scrolling = setInterval(scrollImg, 3000);

function scrollImg() {
  currentPic++;
  if (currentPic > slides.length - 1) {
    currentPic = 0;
  }
  setCurrentSlide();
}

function setCurrentSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[currentPic].classList.add("active");
}

rightBtn.addEventListener("click", () => {
  currentPic++;

  if (currentPic > slides.length - 1) {
    currentPic = 0;
  }
  setCurrentSlide();

  clearInterval(scrolling);
  scrolling = setInterval(scrollImg, 5000);
});

leftBtn.addEventListener("click", () => {
  currentPic--;

  if (currentPic < 0) {
    currentPic = slides.length - 1;
  }
  setCurrentSlide();

  clearInterval(scrolling);
  scrolling = setInterval(scrollImg, 3000);
});

// CLICK TO TAKE YOU THERE
const aboutBtn = document.querySelector("#about");
const contactBtn = document.querySelector("#contact");
const aboutSection = document.querySelector(".about");
const subBtn = document.querySelector(".last-btn");
const subSection = document.querySelector(".subscription");

aboutBtn.addEventListener("click", () => {
  const coords = aboutSection.getBoundingClientRect();
  window.scrollTo(coords.left, coords.top - 200);
});

contactBtn.addEventListener("click", () => {
  const coords = aboutSection.getBoundingClientRect();
  window.scrollTo(coords.left, coords.top - 200);
});

subBtn.addEventListener("click", () => {
  const coords = subSection.getBoundingClientRect();
  window.scrollTo(coords.left, coords.top);
});
