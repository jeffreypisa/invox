<?php // Our custom post type function
  
function create_posttype() {
	
	register_post_type( 'nieuws',

		array(
			'labels' => array(
				'name'                  => __( 'News' ),
				'singular_name'         => __( 'Artikel' ),
				'all_items'             => __( 'Alle artikelen' ),
				'add_new_item'          => __( 'Nieuw artikel toevoegen' ),
				'new_item'              => __( 'Nieuw artikel' ),
				'add_new'               => __( 'Nieuw artikel' ),
				'edit_item'             => __( 'Bewerk artikel' ),
				'update_item'           => __( 'Update artikel' ),
				'view_item'             => __( 'Bekijk artikel' ),
				'search_items'          => __( 'Zoek artikel' ),
			),
			'menu_icon'           		=> 'dashicons-format-aside',
			'public' 					=> true,
			'show_in_rest' 				=> true,
			'has_archive'             	=> true,
			'supports'                	=> array( 'title', 'editor', 'thumbnail' ),
			'rewrite' 					=> array( 'slug' => 'news/%nieuws_categorie%', 
												'with_front' 	=> false ),
		)
	);

	register_post_type( 'team',

		array(
			'labels' => array(
				'name'                  => __( 'Team' ),
				'singular_name'         => __( 'Teamlid' ),
	    		'all_items'             => __( 'Alle teamleden' ),
	    		'add_new_item'          => __( 'Nieuw teamlid toevoegen' ),
	    		'new_item'              => __( 'Nieuw teamlid' ),
	        	'add_new'               => __( 'Nieuw teamlid' ),
	    		'edit_item'             => __( 'Bewerk teamlid' ),
	    		'update_item'           => __( 'Update teamlid' ),
	    		'view_item'             => __( 'Bekijk teamlid' ),
	    		'search_items'          => __( 'Zoek teamlid' ),
			),
			'menu_icon'           		=> 'dashicons-groups',
			'public' 					=> true,
			'show_in_rest' 				=> true,
			'has_archive' 				=> false,
			'supports'                	=> array( 'title', 'editor', 'thumbnail' )
		)
	);
	
}

add_action( 'init', 'create_posttype' ); 

?>