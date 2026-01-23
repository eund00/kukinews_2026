const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
const total = slides.length;

function updateSlide() {
  slides.forEach((slide) => slide.classList.remove("_active"));
  slides[index].classList.add("_active");
}

prevBtn.addEventListener("click", () => {
  index = (index - 1 + total) % total;
  updateSlide();
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % total;
  updateSlide();
});
