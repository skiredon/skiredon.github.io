$(document).ready(function () {
    // Mobile menu
    var touch = $('#touch-menu');
    var menu = $('.header__nav_list');
    $(touch).on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function () {
        var w = $(window).width();
        if (w > 767 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
    //--------------------------------------------
    $('.hamburger').append('<span/><span/><span/>');
});