import $ from "jquery";

export function bgcolorchange() {
	
	// lightgrey
	let observer_lightgrey;
	const items_lightgrey = document.querySelectorAll('.bgcolor-change-lightgrey');
	
	observer_lightgrey = new IntersectionObserver((entries) => {
	  entries.forEach(entry => {
		if (entry.intersectionRatio > 0) {
			if(!$('body').hasClass('bg-lightgrey')) {
				$('body').addClass('bg-lightgrey');
			}
		} else {
			$('body').removeClass('bg-lightgrey');
		}
	  });
	});
	
	items_lightgrey.forEach(image => {
	  observer_lightgrey.observe(image);
	});
	
	// bluedark
	let observer_bluedark
	const items_bluedark = document.querySelectorAll('.bgcolor-change-dark');
	
	observer_bluedark = new IntersectionObserver((entries) => {
	  entries.forEach(entry => {
		if (entry.intersectionRatio > 0) {
			if(!$('.mod-cta').hasClass('bg-basis')) {
				setTimeout(function() {
					$('.mod-cta').addClass('bg-basis').removeClass('text-dark').addClass('text-white');
				}, 1000);
			}
		} else {
			$('.mod-cta').removeClass('bg-basis').removeClass('text-white').addClass('text-dark');
		}
	  });
	});
	
	items_bluedark.forEach(image => {
	  observer_bluedark.observe(image);
	});
}