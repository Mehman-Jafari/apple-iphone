new Swiper(".swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 25,
  navigation: {
    nextEl: ".slider__button-next",
    prevEl: ".slider__button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
