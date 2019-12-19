$(window).on('load', function () {
	$('body').addClass('loaded_hiding');
	window.setTimeout(function () {
		$('body').addClass('loaded');
		$('body').removeClass('loaded_hiding');
	}, 500);
});

$(window).bind("load resize", function () {
	if ($(window).width() >= 768) {
		var mySwiper = new Swiper(".swiper-container", {
			direction: "vertical",
			loop: true,
			pagination: ".swiper-pagination",
			grabCursor: true,
			speed: 1000,
			paginationClickable: true,
			parallax: true,
			autoplay: false,
			effect: "slide",
			mousewheelControl: 1
		});
	} else {
		
	}
});
