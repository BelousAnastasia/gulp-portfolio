$(window).on('load', function () {
	$('body').addClass('loaded_hiding');
	window.setTimeout(function () {
		$('body').addClass('loaded');
		$('body').removeClass('loaded_hiding');
	}, 500);
});

$(window).scroll(function(){
	if ($(window).scrollTop() >= 200) {
			$('header').addClass('fixed-header');
	}
	else {
			$('header').removeClass('fixed-header');
	}
});

$(window).bind("load resize", function () {
	if ($(window).width() >= 768) {
		
	} else {
		
	}
});

$(document).ready(function(){
	$(".navbar").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
					top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 800);
	});

	$('.nav-item').click(function(){
		$(".nav-item").removeClass('active');
		$(this).toggleClass('active');
	});

	$('.navbar-collapse .nav-item').click(function(){
		$('.navbar-toggler').removeClass('collapsed');
		$('.navbar-collapse').removeClass('show');
	});
});
