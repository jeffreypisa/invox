import $ from "jquery";
import 'slick-carousel';

export function slick_init() {	
	
	if ($('.mod-bannerslider').length) {
		
		var slick_carousel = $('.js-slick-bannerslider');
		
		slick_carousel.on('init', function(event, slick) {
			  slick_carousel.find('.slick-current').removeClass('slick-active').addClass('reset-animation');
			  
			  $('#bannerslider_nav_0').addClass('hoverable');
			  
			  setTimeout( function() {
				slick_carousel.find('.slick-current').removeClass('reset-animation').addClass('slick-active');
			  }, 1);
			});
			
		slick_carousel.slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: false,
			centerMode: true,
			fade: true,
			swipeToSlide: true,
			pauseOnHover: false,
			useTransform: true,
			autoplay: true,
			speed: 1000,
			autoplaySpeed: 6000,  
			easing: 'easeInOutQuint'
		});
		
		var activeItem = $('#bannerslider_nav_0');	
		var activeWidth = activeItem.innerWidth();
		var activeHeight = activeItem.innerHeight();
		var heightnav = $('.bannerslider-nav').innerHeight();
		
		var itemPos = activeItem.position();
				  
		activeItem.addClass('active');
		
		$(".selector").css({
			"left":itemPos.left + "px", 
			"width": activeWidth + "px",
			"height": activeHeight + "px"
		});
		
		var pullup = heightnav;
		$(".bannerslider-nav").css('margin-top', pullup * -1)
		
		$(window).on('resize', function(){
			var activeWidth = activeItem.innerWidth();
			var activeHeight = activeItem.innerHeight();
			var heightnav = $('.bannerslider-nav').innerHeight();
			
			var itemPos = activeItem.position();
					  
			
			$(".selector").css({
				 "left":itemPos.left + "px", 
				 "width": activeWidth + "px",
				 "height": activeHeight + "px"
			});
			
			var pullup = heightnav;
			$(".bannerslider-nav").css('margin-top', pullup * -1)
		});
		
		slick_carousel.on('beforeChange', function(event, slick, currentSlide, nextSlide){
			activeItem = $('#bannerslider_nav_' + nextSlide);
			
			$('.bannerslider-nav .item').removeClass('active').removeClass('hoverable');
			
			activeItem.addClass('active');
			
			setTimeout(function() {
				activeItem.addClass('hoverable');
			}, 800);
		
			activeWidth = activeItem.innerWidth();
			activeHeight = activeItem.innerHeight();
			var itemPos = activeItem.position();
		  			
			$(".selector").css({
				"left":itemPos.left + "px", 
				"width": activeWidth + "px",
				"height": activeHeight + "px"
			});
		});
		
		$('.bannerslider-nav .item').on('click', function() {
			var theid = $(this).attr('id');
			if (theid == 'bannerslider_nav_0') {
				$('.js-slick-bannerslider').slick('slickGoTo', 0)
			} else if (theid == 'bannerslider_nav_1') {
				$('.js-slick-bannerslider').slick('slickGoTo', 1)
			} else if (theid == 'bannerslider_nav_2') {
				$('.js-slick-bannerslider').slick('slickGoTo', 2)
			}
		});
	}
}