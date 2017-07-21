$('.js_price__slider').slick({
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: '.js_price__slider_next',
  prevArrow: '.js_price__slider_prev',
  responsive: [
  {
    breakpoint: 1130,
    settings: {
      arrows: true,
      slidesToShow: 2,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 793,
    settings: {
      arrows: true,
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  ]
});
$('.js_scheme_work__items').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
  {
    breakpoint: 1040,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 400,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  ]
});

$(document).ready(function () {


  $('.main_nav__mobile').click(function(){
    $(this).toggleClass('active');
    $('.main_nav__list').toggleClass('mobile_show');
  });


  $('.popup_link').magnificPopup({
    type: 'inline'
  });


  $('.scroll-link').click(function(event)
  {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname)
    {
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
     if (target.length)
     {
              // event.preventDefault();
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            };
          }
        });

  $("input[name=phone]").inputmask({
    "mask": "+7(999)999-99-99",
    "clearIncomplete": true
  });


  function m_close(){
    $.magnificPopup.close();
  }
  $("form").on("submit", function() {
    this_id = $(this).attr('id');
    var formID = '#' + $(this).attr("id");
    $(formID).validate({
      rules: {
        name: 'required',
        phone: 'required'
      },
      messages: {
        name: 'Введите корректные данные',
        phone: 'Введите корректные данные'
      }
    });
    if ($(formID).valid()) {
      $.post('post.php',$(this).serialize(),function(data){
        if(data == '1'){
          $(formID).hide().parent().find('.open-form__sucess').addClass('success-show');
        }
      })

    }
    return false;
  });


}); // documet