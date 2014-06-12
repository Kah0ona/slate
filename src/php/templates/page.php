<?php get_header(); ?>

	<div>
		<div class="u-gridContainer">
		<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
			<article class="Content" id="post-<?php the_ID(); ?>">
				<h2><?php the_title(); ?></h2>
				<div>
					<?php the_content(); ?>
					<?php edit_post_link('Edit this entry.', '<p>', '</p>'); ?>
				</div>
			</article>
		<?php endwhile; endif; ?>
		</div>

		<?php get_sidebar(); ?>

	</div>

<?php get_footer(); ?>
