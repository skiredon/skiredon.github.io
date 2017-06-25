$(document).ready(function(){
    $('.js_slider_bikes').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
    });

      /* select style */
    var params = {
        changedEl: "select",
        visRows: 4,
        scrollArrows: true
    }
    cuSel(params);

    $('.hamburger').append('<span/><span/><span/>');
        // Mobile menu
    var touch   = $('#touch-menu');
    var menu    = $('.header__nav_list');

    $( touch ).click(function() {
        menu.slideToggle();
    });

   $( ".close_button" ).click(function() {
        menu.slideToggle();
    });
        $(window).resize(function(){
            var w = $(window).width();
            if(w > 767 && menu.is(':hidden')) {
                menu.removeAttr('style');
                menu.addClass('display', 'inline-block');
            }
        });
});





