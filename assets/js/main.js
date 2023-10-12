import $ from "jquery";
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';

// Init plugins
import { slick_init } from './scripts/slick.js';
import MatchHeight from 'matchheight';
import { animejs } from './scripts/anime.js';
import lity from 'lity';

// Scripts
import { site_is_loaded } from './scripts/site_is_loaded.js';
import { footer_down } from './scripts/footer_down.js';
import { mobilemenu } from './scripts/mobilemenu.js';
import { scrolleffects } from './scripts/scrolleffects.js';
import { scrollto } from './scripts/scrollto.js';
// import { sticky_header } from './scripts/sticky_header.js';
import { bgcolorchange } from './scripts/bgcolorchange.js';
import { bgmove } from './scripts/bgmove.js';

$( document ).ready(function() {
	footer_down();
	mobilemenu();
	scrollto();
	bgmove();
	// sticky_header();
	bgcolorchange();
	
	$(document).on('click', '[data-lightbox]', lity);
	
	MatchHeight.init();
	// use data-mh
	
	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	let vh = window.innerHeight * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	
	// We listen to the resize event
	window.addEventListener('resize', () => {
	  // We execute the same script as before
	  let vh = window.innerHeight * 0.01;
	  document.documentElement.style.setProperty('--vh', `${vh}px`);
	});
});

$(window).on('load', function() {
	animejs();
	scrolleffects();
	slick_init();
	site_is_loaded();
});