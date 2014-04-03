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
      dev_js_src:         '<%= dirs.dev_js %>/src',
      dev_js_build:       '<%= dirs.dev_js %>/build',
      dev_js_standalone:  '<%= dirs.dev_js %>/standalone',
      dev_js_libs:        '<%= dirs.dev_js %>/libs',
      dev_css:            'css',
      dev_css_build:      '<%= dirs.dev_css %>/build',
      dev_img:            'img',
      dev_img_src:        '<%= dirs.dev_img %>/src',
      dev_img_build:      '<%= dirs.dev_img %>/build',
      dev_ico:            'ico',
      dev_ico_src:        '<%= dirs.dev_ico %>/src',
      dev_ico_build:      '<%= dirs.dev_ico %>/build',
      dev_scss:           'scss',
      dev_scss_libs:      '<%= dirs.dev_scss %>/libs',
      dev_bower:          'bower_components',
      dev_php:            'php',

      // Production
      prod_theme_root:    '/wp-content/themes',
      prod_theme_current: '<%= dirs.prod_theme_root %>/slate',
      prod_css:           '<%= dirs.prod_theme_current %>/css',
      prod_js:            '<%= dirs.prod_theme_current %>/js',
      prod_js_standalone: '<%= dirs.prod_js %>/standalone',
      prod_img:           '<%= dirs.prod_theme_current %>/img'
    },

    // Copy
    copy: {
      bower: {
        files: [
          /* Standalone js libraries
          ---------------*/
          // Jquery
          {
            cwd: '<%= dirs.dev_bower %>/jquery/dist/',
            src: 'jquery.min.js',
            dest: '<%= dirs.dev_js_standalone %>/',
            expand: true,
            flatten: true,
            filter: 'isFile'
          },
          // Modernizr
          {
            cwd: '<%= dirs.dev_bower %>/modernizr/',
            src: 'modernizr.js',
            dest: '<%= dirs.dev_js_standalone %>/',
            expand: true,
            flatten: true,
            filter: 'isFile'
          },
          /* Scss libraries
          ---------------*/
          // Bourbon
          {
            cwd: '<%= dirs.dev_bower %>/bourbon/app/assets/stylesheets/',
            src: '**',
            dest: '<%= dirs.dev_scss_libs %>/bourbon/',
            expand: true
          },
          // Bourbon Neat
          {
            cwd: '<%= dirs.dev_bower %>/neat/app/assets/stylesheets/',
            src: '**',
            dest: '<%= dirs.dev_scss_libs %>/neat/',
            expand: true
          },
          // _Normalize.scss
          {
            cwd: '<%= dirs.dev_bower %>/modularized-normalize-scss/',
            src: '**/*.scss',
            dest: '<%= dirs.dev_scss_libs %>/normalize/',
            expand: true
          }
        ]
      }
    },

    // Concatenate
    concat: {   
      js_prod: {
        src: [
          '<%= dirs.dev_js_libs %>/*.js',
          '<%= dirs.dev_js_src %>/*.js'
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
      js_prod: ["<%= dirs.dev_js_build %>/production.js"],
      bower: ["<%= dirs.dev_bower %>"]
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
          '<%= dirs.dev_css_build %>/production.min.css': '<%= dirs.dev_scss %>/global.scss'
        }
      }
    },

    // Autoprefixer
    autoprefixer: {
      css_prod: {
       src: '<%= dirs.dev_css_build %>/production.min.css'
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
      options: {
        exclusions: ['/**/.gitkeep', '/**/.gitignore']
      },
      css_prod: {
        auth: {
          host: '178.18.94.73',
          port: 21,
          authKey: 'lokaalgevonden'
        },
        src: '<%= dirs.dev_css_build %>',
        dest: '<%= dirs.prod_css %>',
        simple: true,
        useList: false
      },
      css_wordpress: {
        auth: {
          host: '178.18.94.73',
          port: 21,
          authKey: 'lokaalgevonden'
        },
        src: '<%= dirs.dev_css %>/style.css',
        dest: '<%= dirs.prod_theme_current %>',
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
      },
      ico_prod: {
        auth: {
          host: '178.18.94.73',
          port: 21,
          authKey: 'lokaalgevonden'
        },
        src: '<%= dirs.dev_ico_build %>',
        dest: '<%= dirs.prod_theme_current %>',
        simple: false,
        useList: false
      },
      php_prod: {
        auth: {
          host: '178.18.94.73',
          port: 21,
          authKey: 'lokaalgevonden'
        },
        src: '<%= dirs.dev_php %>',
        dest: '<%= dirs.prod_theme_current %>',
        simple: false,
        useList: false
      }
    },

    // Watch
    watch: {
      js_prod: {
        files: ['<%= dirs.dev_js_src %>/*.js','<%= dirs.dev_js_libs %>/*.js'],
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
      css_wordpress: {
        files: ['<%= dirs.dev_css %>/style.css'],
        tasks: ['ftpush:css_wordpress']
      },
      img_prod: {
        files: ['<%= dirs.dev_img_src %>/*'],
        tasks: ['newer:imagemin:img_prod','delete_sync:img_prod','ftpush:img_prod']
      },
      ico_prod: {
        files: ['<%= dirs.dev_ico_src %>/*'],
        tasks: ['ftpush:ico_prod']
      },
      php_prod: {
        files: ['<%= dirs.dev_php %>/*'],
        tasks: ['ftpush:php_prod']
      },
      livereload: {
        options: { livereload: true },
        files: [
          '<%= dirs.dev_css_build %>/production.min.css',
          '<%= dirs.dev_php %>/*.php',
          '<%= dirs.dev_js_build %>/production.min.js',
          '<%= dirs.dev_js_standalone %>/*.js']
      }
    }

  });

  // Load required plugins
  require('load-grunt-tasks')(grunt);

  // Define what to do at which command
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('deploy', ['copy:bower','clean:bower']);

};
