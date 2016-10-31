$(document).ready(function() {

	function wResize() {
		$("header").css("min-height", $(window).height());
	};
	wResize();
	$(window).resize(function() {
		wResize();
	});

	$.stellar({
		responsive: true,
		horizontalOffset: 120
	});

	$('.popup').magnificPopup({type:'image'});
	$('.popup-c').magnificPopup();

  $(".carousel").owlCarousel({
  	// loop: true,
  	responsive: {
  		0: {
  			items:1,
  			nav: true
  		}
  	},
  	navText: ""
  });

	$('.top-phone .wrapper .tab').click(function() {
		$('.top-phone .wrapper .tab').removeClass("active").eq($(this).index()).addClass("active");
		$(".top-phone .tab-item").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");


	$('.bottom-phone .wrapper .tab').click(function() {
		$('.bottom-phone .wrapper .tab').removeClass("active").eq($(this).index()).addClass("active");
		$(".bottom-phone .tab-item").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");

	$('.tabs-header .wrapper .tab').click(function() {
		$('.tabs-header .wrapper .tab').removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs-header .tab-item").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");

	$('.contacts-top .tabs .tab').click(function() {
		$('.contacts-top .tabs .tab').removeClass("active").eq($(this).index()).addClass("active");
		$(".contacts-top-link.tab-item").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
			var thed = $(this);
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				// $.fancybox.close();
				var mp = $.magnificPopup.instance;
				mp.close();
				thed.trigger("reset");
			}, 1000);
		});
	});
});

$(window).load(function() {
	$(".top-header").animated("fadeInDown");
	$(".tabs-header .wrapper").animated("flipInY");
	$(".item-profi").animated("fadeInRight");
	$(".s-profi form").animated("bounceIn");
});
