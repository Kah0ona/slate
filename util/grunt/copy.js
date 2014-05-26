// -------------------------------------
// Grunt copy
// -------------------------------------

module.exports = function (grunt) {

  return {

    // ----- Copy bower components ----- //

    bower_libs: {
      files: [{
        cwd: 'bower_components/jquery/dist',
        src: 'jquery.min.js',
        dest: 'dist/child/js/standalone',
        expand: true,
        flatten: true,
        filter: 'isFile'
      }, {
        cwd: 'bower_components/modernizr',
        src: 'modernizr.js',
        dest: 'dist/child/js/standalone',
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
        src: '<%= chosenTemplates %>',
        dest: 'dev/php/templates',
        expand: true,
        ext: '.php'
      }, {
        cwd: 'src/php/includes',
        src: '<%= chosenIncludes %>',
        dest: 'dev/php/includes',
        expand: true
      }, {
        cwd: 'src/js',
        src: '<%= chosenScripts %>',
        dest: 'dev/js',
        expand: true
      }, {
        cwd: 'src/css',
        src: 'style.child.tpl',
        dest: 'dev/css',
        expand: true,
        ext: '.child'
      }, {
        cwd: 'src/css',
        src: 'style.parent.tpl',
        dest: 'dev/css',
        expand: true,
        ext: '.parent'
      }, {
        cwd: 'src/scss',
        src: '**/*.scss',
        dest: 'dev/scss',
        expand: true
      }, {
        cwd: 'src/ico/library',
        src: '*.svg',
        dest: 'dev/ico/library',
        expand: true
      }],
      options: {
        process: function (content, srcpath) {
          return grunt.template.process(content);
        }
      }
    },

    // ----- Copy php files ----- //

    php_child: {
      files: [{
        cwd: 'dev/php/templates',
        src: '*.php',
        dest: 'dist/child',
        expand: true
      }, {
        cwd: 'dev/php/includes',
        src: '*.php',
        dest: 'dist/child/includes',
        expand: true
      }]
    },

    php_parent: {
      files: [{
        cwd: 'src/php/templates',
        src: ['*.php','*.parent'],
        dest: 'dist/parent',
        expand: true,
        ext: '.php'
      }, {
        cwd: 'dev/php/includes',
        src: '*.php',
        dest: 'dist/parent/includes',
        expand: true
      }]
    },

    // ----- Copy wordpress css ----- //

    css_child: {
      files: [{
        cwd: 'dev/css',
        src: 'style.child',
        dest: 'dist/child',
        expand: true,
        ext: '.css'
      }]
    },

    css_parent: {
      files: [{
        cwd: 'dev/css',
        src: 'style.parent',
        dest: 'dist/parent',
        expand: true,
        ext: '.css'
      }]
    },

    // ----- Copy js ----- //

    js: {
      files: [{
        cwd: 'dev/js',
        src: '*.js',
        dest: 'dist/child/js',
        expand: true
      }]
    },

  }
};
