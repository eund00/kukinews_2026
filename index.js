const swiper = new Swiper(".main-center .swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const swiper1 = new Swiper(".kuki-original-2 .swiper", {
  loop: true,
  slidesPerView: 4.5,
  spaceBetween: 20,
  // speed: 2000,
  speed: 35000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  freeMode: true,
  freeModeMomentum: false,
  allowTouchMove: true,
});

document.getElementById("pleas").addEventListener("click", function () {
  const msg = this.querySelector(".plase_message");

  msg.style.display =
    msg.style.display === "none" || msg.style.display === ""
      ? "inline-block"
      : "none";
});
