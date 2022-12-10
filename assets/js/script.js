var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    740: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    920: {
      slidesPerView: 4,
      spaceBetween: 40
    },
  }
});