<?php get_header(); ?>

<div id="content">
	<div class="container">
		<div class="row-fluid">
			<div class="span9">
			<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
				<div <?php post_class(); ?> id="post-<?php the_ID(); ?>">
				
					<h2 class="pagetitle"><?php the_title(); ?></h2>
				
					<div class="entry">
						<?php the_content(); ?>
						
						<?php edit_post_link('Edit this entry.', '<p>', '</p>'); ?>
					</div>
				</div><!-- post -->
			<?php endwhile; endif; ?>
			</div><!-- 9 -->
	
			<?php get_sidebar(); ?>
	
		</div><!-- row -->
	</div><!-- container -->
</div><!-- #content -->

<?php get_footer(); ?>