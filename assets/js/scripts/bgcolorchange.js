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
	const items_bluedark = document.querySelectorAll('.bgcolor-change-bluedark');
	
	observer_bluedark = new IntersectionObserver((entries) => {
	  entries.forEach(entry => {
		if (entry.intersectionRatio > 0) {
			if(!$('body').hasClass('bg-bluedark')) {
				$('body').addClass('bg-bluedark');
			}
		} else {
			$('body').removeClass('bg-bluedark');
		}
	  });
	});
	
	items_bluedark.forEach(image => {
	  observer_bluedark.observe(image);
	});
}