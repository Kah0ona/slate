// -------------------------------------
// Grunt watch
// -------------------------------------

module.exports = {

  // ----- Watch tasks ----- //

  scss: {
    files: ['lib/scss/**/*.scss', 'dev/scss/**/*.scss'],
    tasks: [
      'sass:expanded',
      'autoprefixer:expanded',
	  'copy:img_child',
      //'csslint:expanded',
      'ftpush:deploy_child'
    ]
  },
  svg: {
    files: ['dev/ico/library/**/*.svg'],
    tasks: [
      'svgstore:all',
      'ftpush:deploy_child'
    ]
  },
  js: {
    files: ['lib/js/**/*.js', 'dev/js/*.js'],
    tasks: [
      'jsbeautifier:js',
     // 'jshint:strict',
      'newer:copy:js',
	  'copy:img_child',
      'ftpush:deploy_child'
    ]
  },
  php: {
    files: ['dev/php/templates/*.php', 'dev/php/includes/*.php'],
    tasks: [
      'newer:copy:php_child',
      'delete_sync:php_templates',
      'delete_sync:php_includes',
      'processhtml:expanded',
	  'copy:img_child',
      'ftpush:deploy_child'
    ]
  },
  img: {
    files: ['dev/img/**/*'],
    tasks: [
      'delete_sync:img',
      'ftpush:deploy_child'
    ]
  },
  ico: {
    files: ['dev/ico/*'],
    tasks: [
	  'copy:img_child',
      'ftpush:deploy_child'
    ]
  },


  // ----- Enable livereload ----- //

  livereload: {
    options: {
      livereload: true
    },
    files: ['dist/child/**/*']
  }
};
