module.exports = {
  bower: 
   { files: 
      // Jquery
      [ { cwd: 'bower_components/jquery/dist',
          src: 'jquery.min.js',
          dest: 'deploy/js/standalone',
          expand: true,
          flatten: true,
          filter: 'isFile' },
        // Modernizr
        { cwd: 'bower_components/modernizr',
          src: 'modernizr.js',
          dest: 'deploy/js/standalone',
          expand: true,
          flatten: true,
          filter: 'isFile' },
        // Bourbon
        { cwd: 'bower_components/bourbon/app/assets/stylesheets',
          src: '**',
          dest: 'lib/scss/bourbon',
          expand: true },
        // Bourbon Neat
        { cwd: 'bower_components/neat/app/assets/stylesheets/',
          src: '**',
          dest: 'lib/scss/neat/',
          expand: true },
        // Responsive Nav
        { cwd: 'bower_components/responsive-nav',
          src: 'responsive-nav.js',
          dest: 'lib/js/responsive-nav',
          expand: true,
          flatten: true,
          filter: 'isFile' },
        { cwd: 'bower_components/responsive-nav',
          src: 'responsive-nav.css',
          dest: 'lib/scss/responsive-nav/',
          rename: function(dest, src) {
            return dest + "_" + src.replace(/\.css$/, ".scss");
          },
          expand: true,
          flatten: true,
          filter: 'isFile' },
        // Normalize.css (scss version)
        { cwd: 'bower_components/modularized-normalize-scss/',
          src: '**/*.scss',
          dest: 'lib/scss/normalize/',
          expand: true } ] },
  php: 
   { files: 
      [ { cwd: 'src/php/templates',
          src: '*.php',
          dest: 'deploy',
          expand: true },
        { cwd: 'src/php/includes',
          src: '*.php',
          dest: 'deploy/includes',
          expand: true } ] },
  css: 
   { files:
      [ { cwd: 'src/css',
          src: 'style.css',
          dest: 'deploy',
          expand: true } ] } };
