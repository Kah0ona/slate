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
    src: 'deploy/js/production.min.js',
    dest: 'deploy/js/production.min.js'
  }
};
