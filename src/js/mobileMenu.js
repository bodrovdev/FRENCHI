import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

// ? --- Мобильное меню
const burger = document.getElementById('burger');
const mobile_menu = document.getElementById('mobile_menu');
const page_header = document.querySelector('.page-header');

// const main_nav = document.querySelector('.main-nav');
// const nav_nav_list = document.querySelector('.main-nav__mobile-menu-list');

function openMobileMenu() {
  burger.classList.add('main-nav__burger--active');
  mobile_menu.classList.add('main-nav__mobile-menu--active');
  document.body.classList.add('body-cover');

  disableBodyScroll(mobile_menu);
}
function closeMobileMenu() {
  burger.classList.remove('main-nav__burger--active');
  mobile_menu.classList.remove('main-nav__mobile-menu--active');
  document.body.classList.remove('body-cover');

  enableBodyScroll(mobile_menu);
}

// ? - Открытие / закрытие меню по клику на бургер
burger.addEventListener('click', () => {
  burger.classList.contains('main-nav__burger--active') ? closeMobileMenu() : openMobileMenu();
})

// ? - Изменение навигации при скролле страницы
document.addEventListener('scroll', () => {
  window.scrollY >= 100 ?
    page_header.classList.add('page-header--fixed') :
    page_header.classList.remove('page-header--fixed');
})