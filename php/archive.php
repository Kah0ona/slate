<?php get_header(); ?>

		<?php if (have_posts()) : ?>
	
			<h2>
			<?php if ( is_day() ) : ?>
				<?php printf( __( 'Daily Archives: %s', '' ), '<span>' . get_the_date() . '</span>' ); ?>
			<?php elseif ( is_month() ) : ?>
				<?php printf( __( 'Monthly Archives: %s', '' ), '<span>' . get_the_date( _x( 'F Y', 'monthly archives date format', '' ) ) . '</span>' ); ?>
			<?php elseif ( is_year() ) : ?>
				<?php printf( __( 'Yearly Archives: %s', '' ), '<span>' . get_the_date( _x( 'Y', 'yearly archives date format', '' ) ) . '</span>' ); ?>
			<?php else : ?>
				<?php _e( 'Archives', '' ); ?>
			<?php endif; ?>
			</h2>
	
		<?php while (have_posts()) : the_post(); ?>
	
			<article <?php post_class() ?>>
			
				<h3 id="post-<?php the_ID(); ?>">
					<a href="<?php the_permalink() ?>" 
					   rel="bookmark" 
					   title="Permanent Link to <?php the_title_attribute(); ?>">
						<?php the_title(); ?>
					</a>
				</h3>
				<span><?php the_time( get_option( 'date_format' ) ); ?></span>

				<div>
					<?php the_content() ?>
				</div>

				<p><?php the_tags('Tags: ', ', ', '<br />'); ?> Posted in <?php the_category(', ') ?> | <?php edit_post_link('Edit', '', ' | '); ?>  <?php comments_popup_link('No Comments &#187;', '1 Comment &#187;', '% Comments &#187;'); ?></p>

			</article>

		<?php endwhile; ?>
	
			<nav>
				<div><?php next_posts_link('&laquo; Older Entries') ?></div>
				<div><?php previous_posts_link('Newer Entries &raquo;') ?></div>
			</nav>
			
		<?php else : ?>
	
			<h2><?php _e('Nothing Found', ''); ?></h2>
				
			<?php get_search_form(); ?>
	
		<?php endif;?>


<?php get_sidebar(); ?>

<?php get_footer(); ?>
