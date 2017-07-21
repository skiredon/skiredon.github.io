var js_news_slider = $('.js-news_slider');
var js_slider_person = $('.js-index_slider_person');
var slider_our_clients = $('.js-index_slider_clients');

var js_news_slider__params = {
    slideWidth: 400,
    minSlides: 4,
    maxSlides: 4,
    moveSlides: 1,
    slideMargin: 0,
    pager: false,
    nextText: '',
    prevText: '',
    prevSelector: '.js-news_slider__prev',
    nextSelector: '.js-news_slider__next'
}

var js_slider_person__params = {
    slideWidth: 320,
    minSlides: 3,
    maxSlides: 3,
    moveSlides: 1,
    slideMargin: 30,
    pager: false,
    nextText: '',
    prevText: '',
    prevSelector: '.js-index_slider_person__prev',
    nextSelector: '.js-index_slider_person__next'
}

var js_slider_our_clients__params = {
    slideWidth: 152,
    minSlides: 6,
    maxSlides: 6,
    moveSlides: 1,
    slideMargin: 0,
    pager: false,
    nextText: '',
    prevText: '',
    prevSelector: '.js-index_slider_clients__prev',
    nextSelector: '.js-index_slider_clients__next'
}
var f_call = function(){};

function f(type_filter) {
    $('.portfolio_slider').slick('slickUnfilter');
    if (type_filter !== '')
      $('.portfolio_slider').slick('slickFilter', type_filter);
    var ii = 0;
    $('.portfolio_slide').each(function(i,elem) {
          ii += 0.1;
        $(this).removeClass('activate').css('transition-delay', ii + 's');
    });
}

function delay(f, ms) {
  return function() {
    var savedThis = this;
    var savedArgs = arguments;

    setTimeout(function() {
      f.apply(savedThis, savedArgs);
    }, ms);
  };
}

$(document).ready(function(){
    check_widthScreen();

    js_slider_person.bxSlider(js_slider_person__params);
    js_news_slider.bxSlider(js_news_slider__params);
    slider_our_clients.bxSlider(js_slider_our_clients__params);

    $('.quote_slider').slick({
        dots: true
    });

  $('.portfolio_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      variableWidth: true,
      centerMode: true,
      dots: true
  });
    $('.portfolio_category .filter-all').on('click', function(){
       set_delay('');
    });
    $('.portfolio_category .filter-art').on('click', function(){
       set_delay('.filter-art');
    });
    $('.portfolio_category .filter-mystery').on('click', function(){
       set_delay('.filter-mystery');
    });
    $('.portfolio_category .filter-illusion').on('click', function(){
       set_delay('.filter-illusion');
    });
    $('.portfolio_category .filter-traves').on('click', function(){
       set_delay('.filter-traves');
    });
    $('.portfolio_category .filter-paintings').on('click', function(){
       set_delay('.filter-paintings');
    });
    $('.hamburger').append('<span/><span/><span/>');
    var touch   = $('#touch-menu');
    var menu    = $('.header__nav_list');
    $(touch).on('click', function(e) {
          e.preventDefault();
          menu.slideToggle();
      });
    $(window).resize(function(){
          var w = $(window).width();
          if(w > 767 && menu.is(':hidden')) {
              menu.removeAttr('style');
          };
    });
});

// Здесь каждому слайду добавляется css transition-delay с разной задержкой. Затем ф-ции f_call добавляется
//delay на 700мс, а затем вызывается эта ф-я
function set_delay(filter_type) {
  var ii = 0;
    $('.portfolio_slide').each(function(i,elem) {
      ii += 0.1;
        $(this).addClass('activate').css('transition-delay', ii + 's');
    });
   f_call = delay(f, 700);
   f_call(filter_type);
};

$(window).on("orientationchange load resize", function () {
    bxslider();
});

function bxslider(){
  check_widthScreen();
  js_news_slider.reloadSlider(js_news_slider__params);
  js_slider_person.reloadSlider(js_slider_person__params);
  slider_our_clients.reloadSlider(js_slider_our_clients__params);
};

function check_widthScreen() {
  var width = $(document).width();
  if(width>=320&&width<=450)
  {
       js_news_slider__params.minSlides = 1;
       js_news_slider__params.maxSlides = 1;

       js_slider_our_clients__params.minSlides = 3;
       js_slider_our_clients__params.maxSlides = 3;
  }
  if(width>=320&&width<=600)
  {
       js_slider_person__params.minSlides = 1;
       js_slider_person__params.maxSlides = 1;
  }
  if(width>450&&width<=768)
  {
      js_news_slider__params.minSlides = 2;
      js_news_slider__params.maxSlides = 2;

      js_slider_our_clients__params.minSlides = 3;
      js_slider_our_clients__params.maxSlides = 3;
  }
  if(width>600&&width<=900)
  {
        js_slider_person__params.minSlides = 2;
        js_slider_person__params.maxSlides = 2;
  }
  if(width>768)
  {
        js_news_slider__params.minSlides = 3;
        js_news_slider__params.maxSlides = 3;

        js_slider_our_clients__params.minSlides = 6;
        js_slider_our_clients__params.maxSlides = 6;
  }
  if(width>900)
  {
        js_slider_person__params.minSlides = 3;
        js_slider_person__params.maxSlides = 3;
  }
};