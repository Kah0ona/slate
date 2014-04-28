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
      cwd: 'init/php/templates',
      src: '<%= init.php.templates %>',
      dest: 'src/php/templates',
      expand: true
    }, {
      cwd: 'init/php/includes',
      src: '<%= init.php.includes %>',
      dest: 'src/php/includes',
      expand: true
    }, {
      cwd: 'init/js',
      src: '<%= init.scripts %>',
      dest: 'src/js',
      expand: true
    }, {
      cwd: 'init/css',
      src: 'style.css',
      dest: 'src/css',
      expand: true
    }]
  },

  // ----- Copy php files ----- //

  php: {
    files: [{
      cwd: 'src/php/templates',
      src: '*.php',
      dest: 'deploy',
      expand: true
    }, {
      cwd: 'src/php/includes',
      src: '*.php',
      dest: 'deploy/includes',
      expand: true
    }]
  },

  // ----- Copy wordpress css ----- //

  css: {
    files: [{
      cwd: 'src/css',
      src: 'style.css',
      dest: 'deploy',
      expand: true
    }]
  }
};
