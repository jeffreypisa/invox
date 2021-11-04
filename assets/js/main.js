import $ from "jquery";
import 'bootstrap';

// Init plugins
import { slick_init } from './scripts/slick.js';
import { matchheight_init } from './scripts/matchheight.js';
import { animejs } from './scripts/anime.js';
import { lity_init } from './scripts/lity.js';

// Scripts
import { site_is_loaded } from './scripts/site_is_loaded.js';
import { footer_down } from './scripts/footer_down.js';
import { mobilemenu } from './scripts/mobilemenu.js';
import { scrolleffects } from './scripts/scrolleffects.js';
import { scrollto } from './scripts/scrollto.js';
// import { sticky_header } from './scripts/sticky_header.js';
import { bgcolorchange } from './scripts/bgcolorchange.js';
import { bgmove } from './scripts/bgmove.js';

lity_init();
matchheight_init();

$( document ).ready(function() {
	footer_down();
	mobilemenu();
	scrollto();
	bgmove();
	// sticky_header();
	bgcolorchange();
});

$(window).on('load', function() {
	animejs();
	scrolleffects();
	slick_init();
	site_is_loaded();
});