var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    350: {
      slidesPerView: 1.5,
    },
    400: {
      slidesPerView: 1.7,
    },
    500: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 2.5,
    },
    700: {
      slidesPerView: 2.5,
    },
    800: {
      slidesPerView: 3.2,
    },
    1250: {
      slidesPerView: 4.5,
    },
    1500: {
      slidesPerView: 5,
    },
    1800: {
      slidesPerView: 6,
    },
  },
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 'auto',
      spaceBetween: 20,
      freeMode: true,
});
