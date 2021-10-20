<?php // Our custom post type function
  
  
function create_posttype() {
	
	register_post_type( 'vacatures',

		array(
			'labels' => array(
				'name'                  => __( 'Vacatures' ),
				'singular_name'         => __( 'Vacature' ),
	    		'all_items'             => __( 'Alle vacatures' ),
	    		'add_new_item'          => __( 'Nieuwe vacature toevoegen' ),
	    		'new_item'              => __( 'Nieuwe vacature' ),
	        	'add_new'               => __( 'Nieuwe vacature' ),
	    		'edit_item'             => __( 'Bewerk vacature' ),
	    		'update_item'           => __( 'Update vacature' ),
	    		'view_item'             => __( 'Bekijk vacature' ),
	    		'search_items'          => __( 'Zoek vacature' ),
			),
			'menu_icon'           		=> 'dashicons-id-alt',
			'public' 					=> true,
			'show_in_rest' 				=> true,
			'has_archive'             	=> false,
			'supports'                	=> array( 'title', 'editor' ),
			'rewrite' 					=> array( 	'slug' 			=> 'jobs', 
													'with_front' 	=> false ),
		)
	);
	
}

add_action( 'init', 'create_posttype' ); 

?>