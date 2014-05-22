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
      'csslint:strict',
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
      'jshint:strict'
      'concat:all',
      'ftpush:deploy_child'
    ]
  },
  php: {
    files: ['dev/php/templates/*.php', 'dev/php/includes/*.php'],
    tasks: [
      'newer:copy:php_child',
      'delete_sync:php_templates',
      'delete_sync:php_includes',
      'ftpush:deploy_child'
    ]
  },
  img: {
    files: ['dev/img/**/*'],
    tasks: [
      'newer:imagemin:all',
      'delete_sync:img',
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
