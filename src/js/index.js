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

// ? --- Табы на главной странице
window.addEventListener('load', () => {
  if (document.querySelector('.index-catalogue-goods__tabs-button') === null) {
    return;
  }
  else {
    let index_tabs_buttons = document.querySelector('.index-catalogue-goods__tabs-controls');
    let index_tabs_items = document.querySelectorAll('.index-catalogue-goods__slider-container');

    index_tabs_buttons.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
        index_tabs_items.forEach(slider => {
          if (e.target.dataset.tab === slider.dataset.tab) {
            document.querySelectorAll('.index-catalogue-goods__tabs-button').forEach(button => button.classList.remove('index-catalogue-goods__tabs-button--active'));
            e.target.classList.add('index-catalogue-goods__tabs-button--active');

            index_tabs_items.forEach(slider_item => { slider_item.classList.remove('index-catalogue-goods__slider-container--active') });
            slider.classList.add('index-catalogue-goods__slider-container--active');
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

// ? --- Раскрывающийся блок на странице товара
window.addEventListener('load', () => {
  let spread_items = document.querySelectorAll('.single-goods__heading-info-spread-item');
  if (spread_items === null) {
    return;
  }
  else {

    spread_items.forEach(item => {
      let item_content = item.querySelector('.single-goods__heading-info-spread-item-content');

      item.addEventListener('click', () => {
        if (item.classList.contains('single-goods__heading-info-spread-item--active')) {
          item.classList.remove('single-goods__heading-info-spread-item--active');
          item.setAttribute('style', '');
        }
        else {
          item.classList.add('single-goods__heading-info-spread-item--active');
          item.setAttribute(`style`, `height:${item_content.offsetHeight + 62}px; transition:height 0.3s;`);
        }
      })
    })
  }
})

// ? --- Кнопка "показать ещё" на странице товара
window.addEventListener('load', () => {
  let target_slides = document.querySelectorAll('.single-goods__reviews-slider-slide');
  if (target_slides === null) {
    return;
  }
  else {
    target_slides.forEach(slide => {
      let target_show_button = slide.querySelector('.single-goods__reviews-slider-slide-button');
      let target_text_block = slide.querySelector('.single-goods__reviews-slider-slide-text');

      if (target_text_block.offsetHeight > 40) {

        target_text_block.classList.add('single-goods__reviews-slider-slide-text--hidden');

        target_show_button.addEventListener('click', () => {
          target_text_block.classList.toggle('single-goods__reviews-slider-slide-text--hidden');

          target_text_block.classList.contains('single-goods__reviews-slider-slide-text--hidden') ?
            target_show_button.textContent = 'Читать полностью' :
            target_show_button.textContent = 'Свернуть';
        })
      }
    })
  }
})