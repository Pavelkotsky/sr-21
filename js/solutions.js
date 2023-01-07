// section 'solutions'

const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 4000,
    },
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        hide: true,
    },
});