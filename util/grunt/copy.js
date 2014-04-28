// -------------------------------------
// Grunt copy
// -------------------------------------

module.exports = {

  // ----- Copy bower components ----- //

  bower: {
    files: [{
      cwd: 'bower_components/jquery/dist',
      src: 'jquery.min.js',
      dest: 'deploy/js/standalone',
      expand: true,
      flatten: true,
      filter: 'isFile'
    }, {
      cwd: 'bower_components/modernizr',
      src: 'modernizr.js',
      dest: 'deploy/js/standalone',
      expand: true,
      flatten: true,
      filter: 'isFile'
    }, {
      cwd: 'bower_components/bourbon/app/assets/stylesheets',
      src: '**',
      dest: 'lib/scss/bourbon',
      expand: true
    }, {
      cwd: 'bower_components/neat/app/assets/stylesheets/',
      src: '**',
      dest: 'lib/scss/neat/',
      expand: true
    }, {
      cwd: 'bower_components/modularized-normalize-scss/',
      src: '**/*.scss',
      dest: 'lib/scss/normalize/',
      expand: true
    }]
  },

  // ----- Copy files for initialization (selected with grunt prompt) ----- //

  init: {
    files: [{
      cwd: 'src/php/templates',
      src: '<%= init.php.templates %>',
      dest: 'dev/php/templates',
      expand: true
    }, {
      cwd: 'src/php/includes',
      src: '<%= init.php.includes %>',
      dest: 'dev/php/includes',
      expand: true
    }, {
      cwd: 'src/js',
      src: '<%= init.scripts %>',
      dest: 'dev/js',
      expand: true
    }, {
      cwd: 'src/css',
      src: 'style.css',
      dest: 'dev/css',
      expand: true
    }, {
      cwd: 'src/scss',
      src: '**/*.scss',
      dest: 'dev/scss',
      expand: true
    }, {
      cwd: 'src/ico',
      src: '*.svg',
      dest: 'dev/ico',
      expand: true
    }]
  },

  // ----- Copy php files ----- //

  php: {
    files: [{
      cwd: 'dev/php/templates',
      src: '*.php',
      dest: 'deploy',
      expand: true
    }, {
      cwd: 'dev/php/includes',
      src: '*.php',
      dest: 'deploy/includes',
      expand: true
    }]
  },

  // ----- Copy wordpress css ----- //

  css: {
    files: [{
      cwd: 'dev/css',
      src: 'style.css',
      dest: 'deploy',
      expand: true
    }]
  }
};
