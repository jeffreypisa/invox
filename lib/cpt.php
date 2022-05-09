<?php // Our custom post type function
  
function create_posttype() {
	
	register_post_type( 'nieuws',

		array(
			'labels' => array(
				'name'                  => __( 'News' ),
				'singular_name'         => __( 'Article' ),
				'all_items'             => __( 'All articles' ),
				'add_new_item'          => __( 'Add new article' ),
				'new_item'              => __( 'New article' ),
				'add_new'               => __( 'Add new article' ),
				'edit_item'             => __( 'Edit article' ),
				'update_item'           => __( 'Update article' ),
				'view_item'             => __( 'View article' ),
				'search_items'          => __( 'Search article' ),
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
				'singular_name'         => __( 'Teammember' ),
	    		'all_items'             => __( 'All teammembers' ),
	    		'add_new_item'          => __( 'Add new member' ),
	    		'new_item'              => __( 'New member' ),
	        	'add_new'               => __( 'Add new member' ),
	    		'edit_item'             => __( 'Edit member' ),
	    		'update_item'           => __( 'Update member' ),
	    		'view_item'             => __( 'View member' ),
	    		'search_items'          => __( 'Search member' ),
			),
			'menu_icon'           		=> 'dashicons-groups',
			'public' 					=> true,
			'show_in_rest' 				=> true,
			'has_archive' 				=> false,
			'supports'                	=> array( 'title', 'editor', 'thumbnail' )
		)
	);
	
	register_post_type( 'affiliates',
	
		array(
			'labels' => array(
				'name'                  => __( 'Investment' ),
				'singular_name'         => __( 'Investment' ),
				'all_items'             => __( 'All investments' ),
				'add_new_item'          => __( 'Add new investment' ),
				'new_item'              => __( 'New investment' ),
				'add_new'               => __( 'Add new investment' ),
				'edit_item'             => __( 'Edit investment' ),
				'update_item'           => __( 'Update investment' ),
				'view_item'             => __( 'View investment' ),
				'search_items'          => __( 'Search investment' ),
			),
			'menu_icon'           		=> 'dashicons-admin-site-alt3',
			'public' 					=> true,
			'show_in_rest' 				=> true,
			'has_archive' 				=> false,
			'rewrite' 					=> array( 'slug' => 'investment'), 
			'supports'                	=> array( 'title', 'editor', 'thumbnail' )
		)
	);
	
}

add_action( 'init', 'create_posttype' ); 

?>