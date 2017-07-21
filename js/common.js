$(document).ready(function() {

    $(window).resize(function() {
        if ($(window).width() <= '500'){
           $('header').removeClass('header__scroll');
        }
    });

    $('.js_main_slider').bxSlider({
        nextText: '',
        prevText: '',
        nextSelector: '.main_slider_wrap__next',
        prevSelector: '.main_slider_wrap__prev',
        pager: false
    });

    $(document).on('click', '.catalog_list__item',function() {
        $(this).toggleClass('show_hide_list');
    });
    $(document).on('click', '.hide_main_nav',function() {
        if  ($('.hide_main_nav').hasClass('active')) {
            $(this).removeClass('active');
            $('.main_nav--mobile').removeClass('active');
            $('aside').removeClass('catalog--mobile');
            $('.wrapper_inner').removeClass('active');
        } else {
            $(this).addClass('active');
            $('.main_nav--mobile').addClass('active');
            $('.wrapper_inner').addClass('active');
        }


        // $('.main_nav--mobile').toggleClass('active');
        // $('.wrapper_inner').toggleClass('active');

    });
    $(document).on('click', '.main_nav__list--mobile a',function() {
        $('.main_nav--mobile').removeClass('active');
        $('aside').addClass('catalog--mobile');
    });
    // Скрипт для фиксированного меню/хедера
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if ($(window).width() > '500'){
            if (scroll !== 0) {
                $('header').addClass('header__scroll');
            } else {
                $('header').removeClass('header__scroll');
            }
        }
    });
    ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.726781, 37.756084],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/content/yandex_balloon.png',
            // Размеры метки.
            iconImageSize: [21, 28],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -35]
        });

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
    });

    $('.product_slider').bxSlider({
      pagerCustom: '.product_slider__pager',
      controls: false,
      mode: 'fade'
    });

    $('.product_tabs__list li').click(function() {
        var tabName = $(this).attr('show-tab');
        $(this).addClass('active').siblings().removeClass('active');
        $('.product_tabs__content .' + tabName).addClass('active').siblings().removeClass('active');
    });
});