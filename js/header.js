// burger
let menuBtn = document.querySelector('.burger');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('burger-active');
    menu.classList.toggle('menu-active');
})

// search
let searchDiv = document.querySelector('.header__search');
let searchInput = document.querySelector('.header__input');
let searchBtn = document.querySelector('.header__search-btn');
let searchSvg = document.querySelector('.search__svg');

searchBtn.addEventListener('click', function() {
    searchBtn.classList.toggle('header__search-btn-active');
    searchDiv.classList.toggle('header__search-active');
    searchInput.classList.toggle('header__input-active');
    searchSvg.classList.toggle('search__svg-active');
})

searchSvg.addEventListener('click', function() {
    searchBtn.classList.toggle('header__search-btn-active');
    searchDiv.classList.toggle('header__search-active');
    searchInput.classList.toggle('header__input-active');
    searchSvg.classList.toggle('search__svg-active');
})