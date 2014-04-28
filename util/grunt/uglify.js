// -------------------------------------
// Grunt uglify
// -------------------------------------

module.exports = {

  // ----- Global options ----- //

  options: {
    banner: '/*! Created on <%= grunt.template.today("mm-dd-yyyy") %> at <%= grunt.template.today("HH:MM") %> */'
  },

  // ----- Generate deploy js ----- //

  js: {
    src: 'build/js/production.js',
    dest: 'deploy/js/production.min.js'
  }
};
