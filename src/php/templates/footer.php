	<div class="Footer">
		<div class="u-gridContainer">
			<?php if ( is_active_sidebar( 'footer-widgets' ) ) : ?>
			<div class="Footer-inner u-gridRow">
				<?php dynamic_sidebar( 'footer-widgets' ); ?>
			</div>
			<?php endif; ?>
		</div>
	</div>


	<div class="Socket">
		<div class="u-gridContainer">
			<!-- Copyright info -->
			<p>&copy; <?php bloginfo('name'); ?> <?php echo date("Y"); ?> - Website & SEO door 
					<a href="http://www.lokaalgevonden.nl" target="_blank">LokaalGevonden</a>
			</p>
		</div>
	</div>

  <!-- Load jquery from google CDN if possible, with fallback to cdnjs -->
  <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery.min.js"><\/script>')</script>

  <!-- build:remove:expanded -->
  <script src="<?php echo get_stylesheet_directory_uri(); ?>/js/production.min.js"></script>
  <!-- /build -->
  <!-- build:remove:compressed -->
  <script src="<?php echo get_stylesheet_directory_uri(); ?>/js/landingpage-select.js"></script>
  <script src="<?php echo get_stylesheet_directory_uri(); ?>/js/nav-collapse.js"></script>
  <script src="<?php echo get_stylesheet_directory_uri(); ?>/js/nav-dropdown.js"></script>
  <script src="<?php echo get_stylesheet_directory_uri(); ?>/js/prepend-svg.js"></script>
  <script src="<?php echo get_stylesheet_directory_uri(); ?>/js/google-maps.js"></script>
  <script src="http://localhost:35729/livereload.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/html-inspector/0.8.0/html-inspector.js"></script>
  <script>HTMLInspector.inspect();</script>
  <!-- /build -->

  <!-- Check if javascript for threaded comments should be loaded -->
  <?php include 'includes/comment-check.php'; ?>

	<!-- Wordpress footer -->
	<?php wp_footer(); ?>
	</body>
</html>
