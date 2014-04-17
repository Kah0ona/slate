<?php
	if ( is_singular() && comments_open() && get_option('thread_comments') )
	  wp_enqueue_script( 'comment-reply' );
?>