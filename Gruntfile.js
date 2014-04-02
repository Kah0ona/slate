module.exports = function(grunt) {

  // Load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  // All configuration goes below here 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Template strings for directories
    dirs: {
      // Dev
      dev_js:             'js',
      dev_js_authored:    '<%= dirs.dev_js %>/authored',
      dev_js_build:       '<%= dirs.dev_js %>/build',
      dev_js_standalone:  '<%= dirs.dev_js %>/standalone',
      dev_js_libs:        '<%= dirs.dev_js %>/libs',
      dev_css:            'css',
      dev_img:            'img',
      dev_img_src:        '<%= dirs.dev_img %>/src',
      dev_img_build:      '<%= dirs.dev_img %>/build',
      dev_scss:           'scss',

      // Production
      prod_theme_root:    '/wp-content/themes',
      prod_theme_current: '<%= dirs.prod_theme_root %>/slate',
      prod_css:           '<%= dirs.prod_theme_current %>/css',
      prod_js:            '<%= dirs.prod_theme_current %>/js',
      prod_js_standalone: '<%= dirs.prod_js %>/standalone',
      prod_img:           '<%= dirs.prod_theme_current %>/img'
    },

    // Concatenate
    concat: {   
      js_prod: {
        src: [
          '<%= dirs.dev_js_libs %>/*.js',
          '<%= dirs.dev_js_authored %>/*.js'
        ],
        dest: '<%= dirs.dev_js_build %>/production.js'
      }
    },

    // Minify
    uglify: {
      options: {
        banner: '/*! Created on <%= grunt.template.today("mm-dd-yyyy") %> at <%= grunt.template.today("HH:MM") %> */'
      },
      js_prod: {
        src: '<%= dirs.dev_js_build %>/production.js',
        dest: '<%= dirs.dev_js_build %>/production.min.js'
      }
    },

    // Clean
    clean: {
      js_prod: ["<%= dirs.dev_js_build %>/production.js"]
    },

    // Sass
    sass: {
      options: {
        banner: '/*! Created on <%= grunt.template.today("mm-dd-yyyy") %> at <%= grunt.template.today("HH:MM") %> */'
      },
      css_prod: {
        options: {
          style: 'compressed'
        },
        files: {
          '<%= dirs.dev_css %>/production.min.css': '<%= dirs.dev_scss %>/global.scss'
        }
      }
    },

    // Autoprefixer
    autoprefixer: {
      css_prod: {
       src: '<%= dirs.dev_css %>/production.min.css'
      }
    },

    // Imagemin
    imagemin: {
      img_prod: {
        files: [{
          expand: true,
          cwd: '<%= dirs.dev_img_src %>/',
          src: ['**/*.{png,jpg,jpeg,gif,PNG,JPG,JPEG,GIF}'],
          dest: '<%= dirs.dev_img_build %>/'
        }]
      }
    },

    // Delete sync
    delete_sync: {
      img_prod: {
        cwd: '<%= dirs.dev_img_build %>',
        src: ['**'],
        syncWith: '<%= dirs.dev_img_src %>'
      }
    },

    // FTP
    // note: exclusions are relative to the src folder
    ftpush: {
      css_prod: {
        auth: {
          host: '178.18.94.73',
          port: 21,
          authKey: 'lokaalgevonden'
        },
        src: '<%= dirs.dev_css %>',
        dest: '<%= dirs.prod_css %>',
        simple: true,
        useList: false
      },
      js_standalone: {
        auth: {
          host: '178.18.94.73',
          port: 21,
          authKey: 'lokaalgevonden'
        },
        src: '<%= dirs.dev_js_standalone %>',
        dest: '<%= dirs.prod_js_standalone %>',
        simple: false,
        useList: false
      },
      js_prod: {
        auth: {
          host: '178.18.94.73',
          port: 21,
          authKey: 'lokaalgevonden'
        },
        src: '<%= dirs.dev_js_build %>',
        dest: '<%= dirs.prod_js %>',
        keep: ['/standalone/*.js'],
        simple: true,
        useList: false
      },
      img_prod: {
        auth: {
          host: '178.18.94.73',
          port: 21,
          authKey: 'lokaalgevonden'
        },
        src: '<%= dirs.dev_img_build %>',
        dest: '<%= dirs.prod_img %>',
        simple: false,
        useList: false
      }
    },

    // Watch
    watch: {
      js_prod: {
        files: ['<%= dirs.dev_js_authored %>/*.js','<%= dirs.dev_js_libs %>/*.js'],
        tasks: ['concat:js_prod','uglify:js_prod','clean:js_prod','ftpush:js_prod']
      },
      js_standalone: {
        files: ['<%= dirs.dev_js_standalone %>/*.js'],
        tasks: ['ftpush:js_standalone']
      },
      css_prod: {
        files: ['<%= dirs.dev_scss %>/**/*.scss'],
        tasks: ['sass:css_prod','autoprefixer:css_prod','ftpush:css_prod']
      },
      img_prod: {
        files: ['<%= dirs.dev_img_src %>/*.*'],
        tasks: ['newer:imagemin:img_prod','delete_sync:img_prod','ftpush:img_prod'],
        options: {
          event: ['added', 'changed', 'deleted'],
        }
      },
      livereload: {
        options: { livereload: true },
        files: [
          '<%= dirs.dev_css %>/production.min.css',
          '<%= dirs.dev_js_build %>/production.min.js',
          '<%= dirs.dev_js_standalone %>/*.js']
      }
    }

  });

  // Load required plugins
  require('load-grunt-tasks')(grunt);

  // Define what to do at which command
  grunt.registerTask('default', ['watch']);

};