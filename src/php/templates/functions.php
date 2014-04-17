<?php
// Add automatic feed links
add_theme_support( 'automatic-feed-links' );

// Add sidebar
if ( function_exists('register_sidebar') ) {
    register_sidebar(array(
    	'name' => 'Top Widgets',
        'before_widget' => '<div id="%1$s" class="widget span4 %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h2 class="widgettitle">',
        'after_title' => '</h2>',
    ));
}
if ( function_exists('register_sidebar') ) {
    register_sidebar(array(
    	'name' => 'Sidebar',
    	'description'   => 'Deze sidebar wordt gebruikt bij het template met 1 sidebar',    	

        'before_widget' => '<li id="%1$s" class="widget %2$s">',
        'after_widget' => '</li>',
        'before_title' => '<h3 class="widgettitle">',
        'after_title' => '</h3>',
    ));
}
if ( function_exists('register_sidebar') ) {
    register_sidebar(array(
    	'name' => 'Left',
    	'description'   => 'Deze sidebar wordt gebruikt bij het template met 2 sidebars',    	
        'before_widget' => '<li id="%1$s" class="widget %2$s">',
        'after_widget' => '</li>',
        'before_title' => '<h3 class="widgettitle">',
        'after_title' => '</h3>',
    ));
}

if ( function_exists('register_sidebar') ) {
    register_sidebar(array(
    	'name' => 'Right',
    	'description'   => 'Deze sidebar wordt gebruikt bij het template met 2 sidebars',    	    	
        'before_widget' => '<li id="%1$s" class="widget %2$s">',
        'after_widget' => '</li>',
        'before_title' => '<h3 class="widgettitle">',
        'after_title' => '</h3>',
    ));
}

if ( function_exists('register_sidebar') ) {
    register_sidebar(array(
    	'name' => 'Footer Widgets',
    	'id' => 'footer-widgets',
        'before_widget' => '<div id="%1$s" class="widget span3 %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h4 class="widgettitle">',
        'after_title' => '</h4>',
    ));
}

// Enable thumbnails
add_theme_support( 'post-thumbnails' );

// Slider custom post type
add_action('init', 'slides_register');
 
function slides_register() {
 
	$labels = array(
		'name' => _x('Slides', 'post type general name'),
		'singular_name' => _x('Slide Item', 'post type singular name'),
		'add_new' => _x('Add New', 'slide item'),
		'add_new_item' => __('Add New Slide Item'),
		'edit_item' => __('Edit Slide Item'),
		'new_item' => __('New Slide Item'),
		'view_item' => __('View Slide Item'),
		'search_items' => __('Search Slides'),
		'not_found' =>  __('Nothing found'),
		'not_found_in_trash' => __('Nothing found in Trash'),
		'parent_item_colon' => ''
	);
 
	$args = array(
		'labels' => $labels,
		'public' => true,
		'publicly_queryable' => true,
		'show_ui' => true,
		'query_var' => true,
		'rewrite' => true,
		'capability_type' => 'post',
		'hierarchical' => false,
		'menu_position' => null,
		'supports' => array('title','editor','thumbnail', 'revisions')
	  ); 
 
	register_post_type( 'slides' , $args );
}

// Register the main navigation
add_action( 'init', 'register_menu' );
			
function register_menu(){
	register_nav_menus( array(
		'main-nav' => 'Main navigation'
   	)); 
}

// Include Walker class

$includes_path = TEMPLATEPATH . '/includes/';

require_once ($includes_path . 'navigation-walker.php');

// Comment form markup
if ( ! function_exists( 'theme_comment' ) ) :

function theme_comment( $comment, $args, $depth ) {
	$GLOBALS['comment'] = $comment;
	switch ( $comment->comment_type ) :
		case '' :
	?>
	<li <?php comment_class(); ?> id="li-comment-<?php comment_ID(); ?>">
		<div id="comment-<?php comment_ID(); ?>">
		<div class="comment-author vcard">
			<?php echo get_avatar( $comment, 40 ); ?>
			<?php printf( __( '%s <span class="says">says:</span>', '' ), sprintf( '<cite class="fn">%s</cite>', get_comment_author_link() ) ); ?>
		</div><!-- .comment-author .vcard -->
		<?php if ( $comment->comment_approved == '0' ) : ?>
			<em class="comment-awaiting-moderation"><?php _e( 'Your comment is awaiting moderation.', '' ); ?></em>
			<br />
		<?php endif; ?>

		<div class="comment-meta commentmetadata"><a href="<?php echo esc_url( get_comment_link( $comment->comment_ID ) ); ?>">
			<?php
				/* translators: 1: date, 2: time */
				printf( __( '%1$s at %2$s', '' ), get_comment_date(),  get_comment_time() ); ?></a><?php edit_comment_link( __( '(Edit)', '' ), ' ' );
			?>
		</div><!-- .comment-meta .commentmetadata -->

		<div class="comment-body"><?php comment_text(); ?></div>

		<div class="reply">
			<?php comment_reply_link( array_merge( $args, array( 'depth' => $depth, 'max_depth' => $args['max_depth'] ) ) ); ?>
		</div><!-- .reply -->
	</div><!-- #comment-##  -->

	<?php
			break;
		case 'pingback'  :
		case 'trackback' :
	?>
	<li class="post pingback">
		<p><?php _e( 'Pingback:', '' ); ?> <?php comment_author_link(); ?><?php edit_comment_link( __( '(Edit)', '' ), ' ' ); ?></p>
	<?php
			break;
	endswitch;
}
endif;
?>
