import $ from "jquery";
import 'slick-carousel';

export function slick_init() {	
	$('.js-slick-bannerslider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		centerMode: true,
		fade: true,
		swipeToSlide: true,
		autoplay: false,
		speed: 1500,
		easing: 'easeInOutQuint'
	});

	const settings = {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		centerMode: true,
		fade: true,
		swipeToSlide: true,
		autoplay: false,
		speed: 1500,
		easing: 'easeInOutQuint',
		mobileFirst: true,
		responsive: [
		{
			breakpoint: 992,
			settings: "unslick"
		}]
	};
	
	
	const sl = $('.js-slick-contentmobile').slick(settings);
	
	$(window).on('resize', function() {
	   if( $(window).width() < 992 &&  !sl.hasClass('slick-initialized')) {
			 $('.js-slick-contentmobile').slick(settings);
		}
	});
}