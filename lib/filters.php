<?php

add_filter( 'timber/twig', 'add_to_twig' );

/**
 * Adds functionality to Twig.
 * 
 * @param \Twig\Environment $twig The Twig environment.
 * @return \Twig\Environment
 */
function add_to_twig( $twig ) {
	// Adding a function.
	$twig->addFunction( new Timber\Twig_Function( 'edit_post_link', 'edit_post_link' ) );
	
	// Adding functions as filters.
	$twig->addFilter( new Timber\Twig_Filter( 'hex2rgb', 'hex2rgb' ) );
	$twig->addFilter( new Timber\Twig_Filter( 'slugify', function( $title ) {
		return sanitize_title( $title );
	} ) );
	
	return $twig;
}

function hex2rgb( $colour ) {
	if ( $colour[0] == '#' ) {
		$colour = substr( $colour, 1 );
	}
	if ( strlen( $colour ) == 6 ) {
			list( $r, $g, $b ) = array( $colour[0] . $colour[1], $colour[2] . $colour[3], $colour[4] . $colour[5] );
	} elseif ( strlen( $colour ) == 3 ) {
			list( $r, $g, $b ) = array( $colour[0] . $colour[0], $colour[1] . $colour[1], $colour[2] . $colour[2] );
	} else {
			return false;
	}
	$r = hexdec( $r );
	$g = hexdec( $g );
	$b = hexdec( $b );
	
	$colour = $r.', '.$g.', '.$b;
	
	return $colour;
}