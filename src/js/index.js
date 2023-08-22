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