// -------------------------------------
// Grunt Sass
// -------------------------------------

module.exports = {

  // ----- Global options ----- //

  options: {
    banner: '/*! Created on <%= grunt.template.today("mm-dd-yyyy") %> at <%= grunt.template.today("HH:MM") %> */'
  },

  // ----- Generate deploy version (compressed) ----- //

  deploy: {
    options: {
      style: 'compressed'
    },
    files: {
      'build/css/production.min.css': 'dev/scss/global.scss'
    }
  },

  // ----- Generate development version (uncompressed) ----- //

  develop: {
    options: {
      style: 'expanded',
      sourcemap: true
    },
    files: {
      'build/css/production.min.css': 'dev/scss/global.scss'
    }
  }
};
