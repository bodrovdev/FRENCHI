import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

// ? --- Отключение подсветки ошибок в инпутах
window.addEventListener('load', () => {
  if (!(document.querySelectorAll('input') === null)) {
    document.querySelectorAll('input').forEach((input) => {
      input.setAttribute('spellcheck', 'false');
    })
  }
})

// ? --- Показать страницу только после загрузки
window.addEventListener('load', () => {
  document.body.removeAttribute('style');
})

// ? --- Размытие странички при открытии подменю
function watchBlurElement(element) {
  if (window.innerWidth >= 1024) {
    element.addEventListener('mouseover', () => {
      document.body.classList.add('body-cover');
      disableBodyScroll(mobile_menu);

      document.querySelector('.page-header').addEventListener('mouseleave', () => {
        document.body.classList.remove('body-cover');
        enableBodyScroll(mobile_menu);
      })

      Array.from(document.querySelectorAll('.main-nav__mobile-menu-item')).filter(item => item.getAttribute('id') === null).forEach(item => {
        item.addEventListener('mouseover', () => {
          document.body.classList.remove('body-cover');
          enableBodyScroll(mobile_menu);
        })
      })

    })
  }
}

window.addEventListener('load', () => {
  watchBlurElement(document.querySelector('#catalogue_item'));
  watchBlurElement(document.querySelector('.main-nav__catalogue'));
})

// ? --- Табы
window.addEventListener('load', () => {
  if (document.querySelector('.catalogue-goods__tabs-button') === null) {
    return;
  }
  else {
    let goods_tabs_buttons = document.querySelector('.catalogue-goods__tabs-controls');
    let goods_tabs_items = document.querySelectorAll('.catalogue-goods__slider-container');

    goods_tabs_buttons.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
        goods_tabs_items.forEach(slider => {
          if (e.target.dataset.tab === slider.dataset.tab) {
            document.querySelectorAll('.catalogue-goods__tabs-button').forEach(button => button.classList.remove('catalogue-goods__tabs-button--active'));
            e.target.classList.add('catalogue-goods__tabs-button--active');

            goods_tabs_items.forEach(slider_item => { slider_item.classList.remove('catalogue-goods__slider-container--active') });
            slider.classList.add('catalogue-goods__slider-container--active');
          }
        })
      }
    })
  }
})

// ? --- Категории
window.addEventListener('load', () => {
  let catalogue = document.querySelector('.main-nav__catalogue');
  let main_nav = document.querySelector('.main-nav');
  let mobile_menu = document.getElementById('mobile_menu');

  function setCatalogueWith(element) {
    catalogue.setAttribute('style', `width:${element.offsetWidth}px`)
  }

  if (window.innerWidth <= 1024) {
    document.getElementById('catalogue_link').removeAttribute('href');
    document.getElementById('catalogue_link').addEventListener('click', () => {
      catalogue.classList.toggle('main-nav__catalogue--active');
      document.getElementById('catalogue_link').classList.toggle('catalogue-link-active');
    });

    setCatalogueWith(mobile_menu);
    document.addEventListener('resize', setCatalogueWith(mobile_menu));
  }

  else if (window.innerWidth > 1024) {
    setCatalogueWith(main_nav);
    document.addEventListener('resize', setCatalogueWith(main_nav));
  }
})

// ? --- Отображение плашки "новинка" на слайдах с товарами
window.addEventListener('load', () => {
  let catalogueSlides = document.querySelectorAll('.catalogue-goods__slider-slide');

  if (catalogueSlides === null) {
    return;
  }
  catalogueSlides.forEach(slide => {
    slide.dataset.new === 'Новинка' ? slide.classList.add('catalogue-goods__slider-slide--new') : slide;
  })
})

// ? --- Количество звёзд в слайдере с отзывами на странице с товаром
window.addEventListener('load', () => {
  let reviews_slides = document.querySelectorAll('.single-goods__reviews-slider-slide');

  if (reviews_slides === null) {
    return;
  }
  else {
    reviews_slides.forEach(slide => {
      for (let i = 0; i < slide.dataset.rating; i++) {
        slide.querySelector('.single-goods__reviews-slider-slide-stars').innerHTML += `
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
        <path
          d="M6.11958 1.17082C6.23932 0.802297 6.76068 0.802296 6.88042 1.17082L8.09405 4.90598C8.1476 5.07079 8.30118 5.18237 8.47447 5.18237H12.4018C12.7893 5.18237 12.9504 5.67822 12.637 5.90598L9.45965 8.21443C9.31945 8.31629 9.26079 8.49684 9.31434 8.66165L10.528 12.3968C10.6477 12.7653 10.2259 13.0718 9.91243 12.844L6.73511 10.5356C6.59492 10.4337 6.40508 10.4337 6.26489 10.5356L3.08757 12.844C2.77408 13.0718 2.35229 12.7653 2.47203 12.3968L3.68566 8.66165C3.73921 8.49684 3.68055 8.31629 3.54035 8.21443L0.363036 5.90598C0.0495502 5.67822 0.21066 5.18237 0.598149 5.18237H4.52553C4.69882 5.18237 4.8524 5.07079 4.90595 4.90598L6.11958 1.17082Z"
          fill="#FCA95D" />
          </svg>
        `
      }
    })
  }
})

// ? --- Раскрывающийся блок на странице товара
// window.addEventListener('load', () => {
//   let spread_items = document.querySelectorAll('.single-goods__heading-info-spread-item');
//   if (spread_items === null) {
//     return;
//   }
//   else {
//     spread_items.forEach(item => {
//       let item_content = item.querySelector('.single-goods__heading-info-spread-item-content');

//       item.addEventListener('click', () => {
//         if (item.classList.contains('single-goods__heading-info-spread-item--active')) {
//           item.classList.remove('single-goods__heading-info-spread-item--active');
//           item.setAttribute('style', '');
//         }
//         else {
//           item.classList.add('single-goods__heading-info-spread-item--active');
//           item.setAttribute(`style`, `height:${item_content.offsetHeight + 62}px; transition:height 0.3s;`);
//         }
//       })
//     })
//   }
// })

// ? --- Кнопка "показать ещё" на странице товара
// window.addEventListener('load', () => {
//   let target_slides = document.querySelectorAll('.single-goods__reviews-slider-slide');
//   if (target_slides === null) {
//     return;
//   }
//   else {
//     target_slides.forEach(slide => {
//       let target_show_button = slide.querySelector('.single-goods__reviews-slider-slide-button');
//       let target_text_block = slide.querySelector('.single-goods__reviews-slider-slide-text');

//       if (target_text_block.offsetHeight > 40) {

//         target_text_block.classList.add('single-goods__reviews-slider-slide-text--hidden');

//         target_show_button.addEventListener('click', () => {
//           target_text_block.classList.toggle('single-goods__reviews-slider-slide-text--hidden');

//           target_text_block.classList.contains('single-goods__reviews-slider-slide-text--hidden') ?
//             target_show_button.textContent = 'Читать полностью' :
//             target_show_button.textContent = 'Свернуть';
//         })
//       }
//     })
//   }
// })