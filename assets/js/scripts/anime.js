import anime from 'animejs/lib/anime.es.js';
import $ from "jquery";

export function animejs() {
	
	// Anime Reveal
	
	let observer_reveal;
	const items_reveal = document.querySelectorAll('.anime-reveal');
	
	observer_reveal = new IntersectionObserver((entries) => {
	  entries.forEach(entry => {
		if (entry.intersectionRatio > 0) {
			$(entry.target).addClass('visible');
			observer_reveal.unobserve(entry.target);
			} else {
				// entry.target.classList.remove('anime-reveal');
			}
		});
	});
	
	items_reveal.forEach(image => {
	  observer_reveal.observe(image);
	});
	
	
	// Anime Fade in
	
	let observer_fadein;
	const items_fadein = document.querySelectorAll('.anime-fadein');
	
	observer_fadein = new IntersectionObserver((entries) => {
	  entries.forEach(entry => {
		if (entry.intersectionRatio > 0) {
			anime.timeline({
				loop: false,
				easing: 'linear'
			})
			.add({
				targets: entry.target,
				opacity: 0,
				delay: 0,
				duration: 0
			})
			.add({
				targets: entry.target,
				opacity: 1,
				translateY: [30, 0],
				delay: 500,
				duration: 600
			})
			observer_fadein.unobserve(entry.target);
		} else {
		  // entry.target.classList.remove('anime-fadein');
		}
	  });
	});
	
	items_fadein.forEach(image => {
	  observer_fadein.observe(image);
	});
	
	
	// Anime Fade in
	
	let observer_flip;
	const items_flip = document.querySelectorAll('.anime-flip');
	
	observer_flip = new IntersectionObserver((entries) => {
	  entries.forEach(entry => {
		if (entry.intersectionRatio > 0) {
			$(entry.target).addClass('visible');
			observer_flip.unobserve(entry.target);
		} else {
		  // entry.target.classList.remove('anime-flip');
		}
	  });
	});
	
	items_flip.forEach(image => {
	  observer_flip.observe(image);
	});
	
	
}