	<div id="sidebar" class="span3">
		<ul>
			<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('Sidebar') ) : ?>
			<?php endif; ?>
		</ul>
	</div>