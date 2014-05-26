// -------------------------------------
// Grunt uglify
// -------------------------------------

module.exports = {

  // ----- Global options ----- //

  options: {
    banner: '/*! Created on <%= grunt.template.today("mm-dd-yyyy") %> at <%= grunt.template.today("HH:MM") %> */'
  },

  // ----- Minify js ----- //

  all: {
    src: 'dist/child/js/production.js',
    dest: 'dist/child/js/production.min.js'
  }
};
