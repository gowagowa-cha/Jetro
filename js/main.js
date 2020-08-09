$(function () {

	$('.slider').slick({
		fade: true,
		prevArrow: '<button type="button" class="slider__arrow slider__arrow--prev"></button>',
		nextArrow: '<button type="button" class="slider__arrow slider__arrow--next"></button>',
		asNavFor: '.thumbs'
	});

	$('.thumbs').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.slider',
		focusOnSelect: true
	});
});