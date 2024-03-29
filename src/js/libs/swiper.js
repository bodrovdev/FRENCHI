import Swiper from 'swiper/bundle';

// ! --- Слайдер в хедере
let heading_slider = new Swiper(".heading__slider", {
  direction: "horizontal",
  slidesPerView: 1,
  speed: 1300,
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".heading__slider-pagination",
    clickable: true,
  },
});

// ! --- Слайдер первого каталога на главной
var index_catalogue_slider_init = false;

function index_catalogue_slider() {
  if (window.innerWidth <= 767) {
    if (!index_catalogue_slider_init) {
      index_catalogue_slider_init = true;

      var index_catalogue_slider = new Swiper(".index-catalogue__slider", {
        direction: "horizontal",
        spaceBetween: 20,
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
let index_catalogue_slider_second_1 = new Swiper(".catalogue-goods__slider--1", {
  direction: "horizontal",
  slidesPerView: "auto",

  breakpoints: {
    320: {
      initialSlide: 1,
      centeredSlides: true,
      spaceBetween: 0,
    },
    767: {
      initialSlide: 0,
      centeredSlides: false,
      spaceBetween: 16,
    },
    1023: {
      initialSlide: 0,
      centeredSlides: false,
      spaceBetween: 47,
    },
  },

  navigation: {
    nextEl: '.catalogue-goods__nav-arrow--next',
    prevEl: '.catalogue-goods__nav-arrow--prev',
  },

  pagination: {
    el: ".catalogue-goods__slider-pagination",
    clickable: true,
  },
});
let index_catalogue_slider_second_2 = new Swiper(".catalogue-goods__slider--2", {
  direction: "horizontal",
  slidesPerView: "auto",

  breakpoints: {
    320: {
      initialSlide: 1,
      centeredSlides: true,
      spaceBetween: 0,
    },
    767: {
      initialSlide: 0,
      centeredSlides: false,
      spaceBetween: 16,
    },
    1023: {
      initialSlide: 0,
      centeredSlides: false,
      spaceBetween: 47,
    },
  },

  navigation: {
    nextEl: '.catalogue-goods__nav-arrow--next',
    prevEl: '.catalogue-goods__nav-arrow--prev',
  },

  pagination: {
    el: ".catalogue-goods__slider-pagination",
    clickable: true,
  },
});
let index_catalogue_slider_second_3 = new Swiper(".catalogue-goods__slider--3", {
  direction: "horizontal",
  slidesPerView: "auto",

  breakpoints: {
    320: {
      initialSlide: 1,
      centeredSlides: true,
      spaceBetween: 0,
    },
    767: {
      initialSlide: 0,
      centeredSlides: false,
      spaceBetween: 16,
    },
    1023: {
      initialSlide: 0,
      centeredSlides: false,
      spaceBetween: 47,
    },
  },

  navigation: {
    nextEl: '.catalogue-goods__nav-arrow--next',
    prevEl: '.catalogue-goods__nav-arrow--prev',
  },

  pagination: {
    el: ".catalogue-goods__slider-pagination",
    clickable: true,
  },
});
let index_catalogue_slider_second_4 = new Swiper(".catalogue-goods__slider--4", {
  direction: "horizontal",
  slidesPerView: "auto",

  breakpoints: {
    320: {
      initialSlide: 1,
      centeredSlides: true,
      spaceBetween: 0,
    },
    767: {
      initialSlide: 0,
      centeredSlides: false,
      spaceBetween: 16,
    },
    1023: {
      initialSlide: 0,
      centeredSlides: false,
      spaceBetween: 47,
    },
  },

  navigation: {
    nextEl: '.catalogue-goods__nav-arrow--next',
    prevEl: '.catalogue-goods__nav-arrow--prev',
  },

  pagination: {
    el: ".catalogue-goods__slider-pagination",
    clickable: true,
  },
});

// ! --- Слайдеры на странице отдельного товара
let single_goods_slider_thumb = new Swiper(".single-goods__heading-slider-thumb", {
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,

  breakpoints: {
    320: {
      direction: "horizontal",
      spaceBetween: 13,
    },
    767: {
      direction: "vertical",
      spaceBetween: 16,
    },
  },
});

let single_goods_slider = new Swiper(".single-goods__heading-slider", {
  direction: "horizontal",
  slidesPerView: 1,

  thumbs: {
    swiper: single_goods_slider_thumb,
  },

  navigation: {
    nextEl: ".single-goods__heading-slider-nav-button--next",
    prevEl: ".single-goods__heading-slider-nav-button--prev",
  },
});

let single_goods_reviews_slider = new Swiper(".single-goods__reviews-slider", {
  direction: "horizontal",

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      spaceBetween: 18,
      slidesPerView: "auto",
      centeredSlides: true,
      initialSlide: 1,
    },
    1024: {
      spaceBetween: 18,
      slidesPerView: "auto",
      centeredSlides: true,
      initialSlide: 1,
    }
  },

  navigation: {
    nextEl: ".single-goods__reviews-slider-button--next",
    prevEl: ".single-goods__reviews-slider-button--prev",
  },
});

let single_goods_comp_slider = new Swiper(".single-goods__comp-slider", {
  direction: "horizontal",
  slidesPerView: "auto",

  breakpoints: {
    320: {
      initialSlide: 1,
      centeredSlides: true,
      spaceBetween: 30,
    },
    767: {
      initialSlide: 0,
      centeredSlides: false,
      spaceBetween: 16,
    },
    1023: {
      initialSlide: 0,
      centeredSlides: false,
      spaceBetween: 43,
    },
  },

  navigation: {
    prevEl: ".single-goods__comp-slider-nav-arrow--prev",
    nextEl: ".single-goods__comp-slider-nav-arrow--next",
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