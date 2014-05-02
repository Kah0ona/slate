// -------------------------------------
// Grunt Sass
// -------------------------------------

module.exports = {

  // ----- Global options ----- //

  options: {
    banner: '/*! Created on <%= grunt.template.today("mm-dd-yyyy") %> at <%= grunt.template.today("HH:MM") %> */'
  },

  // ----- Generate deploy version (compressed) ----- //

  compressed: {
    options: {
      style: 'compressed'
    },
    files: {
      'deploy/css/production.min.css': 'dev/scss/global.scss'
    }
  },

  // ----- Generate development version (uncompressed) ----- //

  expanded: {
    options: {
      style: 'expanded',
      sourcemap: true
    },
    files: {
      'deploy/css/production.min.css': 'dev/scss/global.scss'
    }
  }
};
