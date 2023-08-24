import Swiper from 'swiper/bundle';

// ! --- Слайдер в хедере
let heading_slider = new Swiper(".heading__slider", {
  direction: "horizontal",
  slidesPerView: 1,

  pagination: {
    el: ".heading__slider-pagination",
    clickable: true,
  },
});

// ! --- Слайдер первого каталога на главной
var index_catalogue_slider_init = false;

function index_catalogue_slider() {
  if (window.innerWidth <= 1024) {
    if (!index_catalogue_slider_init) {
      index_catalogue_slider_init = true;

      var index_catalogue_slider = new Swiper(".index-catalogue__slider", {
        direction: "horizontal",
        spaceBetween: 10,
        slidesPerView: "auto",

        pagination: {
          el: ".index-catalogue__slider-pagination",
          type: "progressbar",
          clickable: true,
        },

      });
    }
  } else if (index_catalogue_slider_init) {
    index_catalogue_slider.destroy();
    index_catalogue_slider_init = false;
  }
}
index_catalogue_slider();
window.addEventListener("resize", index_catalogue_slider);

// ! --- Слайдеры второго каталога на главной
let index_catalogue_slider_second_1 = new Swiper(".index-catalogue-goods__slider--1", {
  direction: "horizontal",
  slidesPerView: 5,
  spaceBetween: 48,

  navigation: {
    nextEl: '.index-catalogue-goods__nav-arrow--next',
    prevEl: '.index-catalogue-goods__nav-arrow--prev',
  },

  pagination: {
    el: ".index-catalogue-goods__slider-pagination",
    clickable: true,
  },
});
let index_catalogue_slider_second_2 = new Swiper(".index-catalogue-goods__slider--2", {
  direction: "horizontal",
  slidesPerView: 5,
  spaceBetween: 48,

  navigation: {
    nextEl: '.index-catalogue-goods__nav-arrow--next',
    prevEl: '.index-catalogue-goods__nav-arrow--prev',
  },

  pagination: {
    el: ".index-catalogue-goods__slider-pagination",
    clickable: true,
  },
});
let index_catalogue_slider_second_3 = new Swiper(".index-catalogue-goods__slider--3", {
  direction: "horizontal",
  slidesPerView: 5,
  spaceBetween: 48,

  navigation: {
    nextEl: '.index-catalogue-goods__nav-arrow--next',
    prevEl: '.index-catalogue-goods__nav-arrow--prev',
  },

  pagination: {
    el: ".index-catalogue-goods__slider-pagination",
    clickable: true,
  },
});
let index_catalogue_slider_second_4 = new Swiper(".index-catalogue-goods__slider--4", {
  direction: "horizontal",
  slidesPerView: 5,
  spaceBetween: 48,

  navigation: {
    nextEl: '.index-catalogue-goods__nav-arrow--next',
    prevEl: '.index-catalogue-goods__nav-arrow--prev',
  },

  pagination: {
    el: ".index-catalogue-goods__slider-pagination",
    clickable: true,
  },
});

// ? Мобильный слайдер
// var mobile_slider_init = false;

// function mobile_slider() {
//   if (window.innerWidth <= 1024) {
//     if (!mobile_slider_init) {
//       mobile_slider_init = true;

//       var mobile_slider = new Swiper(".mobile-slider-class", {
//         direction: "horizontal",
//         spaceBetween: 25,

//         breakpoints: {
//           320: {
//             slidesPerView: 1
//           },
//           768: {
//             slidesPerView: "auto"
//           },
//         },

//         pagination: {
//           el: ".mobile-slider-class__pagination",
//           clickable: true,
//         },

//       });
//     }
//   } else if (mobile_slider_init) {
//     mobile_slider.destroy();
//     mobile_slider_init = false;
//   }
// }
// mobile_slider();
// window.addEventListener("resize", mobile_slider);

// ? Обычный слайдер
// let regular_slider = new Swiper(".regular-slider-class", {
//   direction: "horizontal",
//   spaceBetween: 25,

//   breakpoints: {
//     320: {
//       slidesPerView: 1
//     },
//     768: {
//       slidesPerView: "auto",
//     },
//   },

//   navigation: {
//     nextEl: '.regular-slider-class__arrow--next',
//     prevEl: '.regular-slider-class__arrow--prev',
//   },

//   pagination: {
//     el: ".regular-slider-class__pagination",
//     clickable: true,
//   },
// });