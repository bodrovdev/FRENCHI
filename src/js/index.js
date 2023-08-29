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

// ? Отображение плашки "новинка" на слайдах с товарами
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
      item.addEventListener('click', () => {
        item.classList.contains('single-goods__heading-info-spread-item--active') ?
          item.classList.remove('single-goods__heading-info-spread-item--active') :
          (() => {
            spread_items.forEach(item_value => { item_value.classList.remove('single-goods__heading-info-spread-item--active'); })
            item.classList.add('single-goods__heading-info-spread-item--active')
          })();
      })
    })
  }
})