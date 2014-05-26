// *************************************
//
//   Gruntfile
//   -> Grunt's main configuration
//
// *************************************

module.exports = function (grunt) {

  // -------------------------------------
  // Load all grunt tasks from util/grunt
  // -------------------------------------

  require('load-grunt-config')(grunt, {
    configPath: process.cwd() + '/util/grunt'
  });

  // -------------------------------------
  // Register the grunt tasks
  // -------------------------------------

  // ----- Grunt init ----- //

  grunt.registerTask('init', 'Initialize the development environment, build and deploy initial themes.', [
    // Show warnings
    'attention:ftppass_reminder',
    'attention:deletion_warning',
    // Ask for necessary variables and process them
    'prompt:init',
    'clean:init',
    'copy:init',
    'mkdir:init',
    'json-replace:init_npm',
    'json-replace:init_bower',
    'exec:git_set_remote',
    'exec:git_log_remote',
    // Install and process bower libs
    'exec:bower_install',
    'copy:bower_libs',
    // Build themes and deploy them
    'build:parent',
    'ftpush:deploy_parent',
    'build:child:expanded',
    'ftpush:init_deploy_child'
  ]);

  // ----- Grunt develop ----- //

  grunt.registerTask('develop', 'Build child theme, watch for changes and process them.', [
    'build:child:expanded',
    'ftpush:deploy_child',
    'watch'
  ]);

  // ----- Grunt deploy ----- //

  grunt.registerTask('deploy', 'Deploy compressed child theme to live server.', [
    'clean:child',
    'build:child:compressed',
    'ftpush:deploy_child'
  ]);

  // ----- Grunt build ----- //

  grunt.registerTask('build', 'Build child or parent files.', function(type, style) {
    if (type == null) {
      grunt.warn('Build type must be specified, either build:child or build:parent.');
    };
    if (type === 'child' && style == null) {
      grunt.warn('Child build style must be specified, either build:child:compressed or build:child:expanded.');
    };
    if (type === 'child') {
      if (style === 'compressed') {
        grunt.task.run(
          // Compile sass and prefix and lint css
          'sass:compressed',
          'autoprefixer:compressed',
          'csslint:strict',
          // Beautify, lint, concat and minify js
          'jsbeautifier:js',
          'jshint:strict',
          'concat:all',
          'uglify:all',
          // Process php
          'copy:php_child',
          'delete_sync:php_templates',
          'delete_sync:php_includes',
          // Copy Wp child css
          'copy:css_child',
          // Process images
          'imagemin:all',
          'delete_sync:img',
          // Process svg icons
          'svgstore:all'
        );
      };
      if (style === 'expanded') {
        grunt.task.run(
          // Compile sass and prefix and lint css
          'sass:expanded',
          'autoprefixer:expanded',
          'csslint:strict',
          // Make sure all bower libs are present
          'newer:copy:bower_libs',
          // Beautify, lint and concat js
          'jsbeautifier:js',
          'jshint:strict',
          'concat:all',
          // Process php
          'newer:copy:php_child',
          'delete_sync:php_templates',
          'delete_sync:php_includes',
          // Copy Wp child css
          'copy:css_child',
          // Process images
          'newer:imagemin:all',
          'delete_sync:img',
          // Process svg icons
          'svgstore:all'
        );
      };
    };
    if (type === 'parent') {
      grunt.task.run(
        // Copy parent php
        'copy:php_parent',
        // Copy parent style.css
        'copy:css_parent'
      );
    };
  });

};
