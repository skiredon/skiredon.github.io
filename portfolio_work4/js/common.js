$(document).ready(function(){
  // Slider on the main page
    $('.js_main_slider').bxSlider({
        pagerCustom: '.index_slider_pager',
        controls: false
    });
    $('.js_product_view_slider').bxSlider({
        pagerCustom: '.js_product_view_pager',
        controls: false
    });
    // Slider in the product block - preview
    $('.p_item__slider').bxSlider({
        pagerCustom: '.p_item_colors',
        controls: false
    });

    $('.sizes_list li').click(function() {
        $('.sizes_list li').removeClass('active');
        $(this).toggleClass('active');
    });
    // Mobile menu
    var touch   = $('#touch-menu');
    var menu    = $('.header-nav__list');

    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function(){
        var w = $(window).width();
        if(w > 767 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
    $('.hamburger').append('<span/><span/><span/>');
});