<?php
/**
* Template Name: News archive
*
* @package WordPress
* @subpackage Twenty_Fourteen
* @since Twenty Fourteen 1.0
*/
	
$templates = array( 'archive.twig', 'page.twig' );

$context = Timber::get_context();

$post = new TimberPost();
$context['post'] = $post;

/* Load categories */

$terms = \Timber::get_terms(array('taxonomy' => 'nieuws_categorie', 'hide_empty' => true));
$context['categories'] = $terms;

$args = array(
	'post_type'			  => 'nieuws',
	'posts_per_page'  => -1,
);		

$context['posts'] = Timber::get_posts($args);

Timber::render( $templates, $context );