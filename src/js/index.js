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
    let index_tabs_items = document.querySelectorAll('.index-catalogue-goods__slider');

    index_tabs_buttons.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
        index_tabs_items.forEach(slider => {
          if (e.target.dataset.tab === slider.dataset.tab) {

            document.querySelectorAll('.index-catalogue-goods__tabs-button').forEach(button => button.classList.remove('index-catalogue-goods__tabs-button--active'));
            e.target.classList.add('index-catalogue-goods__tabs-button--active');

            index_tabs_items.forEach(slider_item => { slider_item.classList.remove('index-catalogue-goods__slider--active') });
            slider.classList.add('index-catalogue-goods__slider--active');
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