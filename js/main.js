// Burger menu
$(document).ready(function() {
    $('.menu__burger').click(function() {
        $('.burger__button').toggleClass('open-menu');
        $('.menu__list').toggleClass('open-menu');
    });
});