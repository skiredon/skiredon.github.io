$(document).ready(function(){
        $('.js_slider_top').slick({
        dots: true,
        arrows: false
    });
    $('.hamburger').append('<span/><span/><span/>');
    // Mobile menu
        var touch   = $('#touch-menu');
        var menu    = $('.header_nav__list');
    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function(){
        var w = $(window).width();
        if(w > 820 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});
