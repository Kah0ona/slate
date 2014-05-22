// -------------------------------------
// Grunt Jshint
// -------------------------------------

module.exports = {

  // ----- Default options ----- //

  options: {
    jshintrc: ".jshintrc"
  },

  // ----- Strict ----- //

  strict: {
    files: {
      src: ['lib/js/**/*.js', 'dev/js/*.js']
    }
  }
};
