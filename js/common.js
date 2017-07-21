$(document).ready(function () {
    $(".header_nav__list li.anchor_link").on("click", "a", function (event) {
        var id = $(this).attr('href');
        id = '#' + id.split('#')[1];
        var top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000, "swing");
        event.preventDefault();
    });
});
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > $(this).height() * 0.9) {
            $('#back-top').addClass("show");

        } else {
            $('#back-top').removeClass("show");
        }
    });

    $('#back-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});