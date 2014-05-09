// -------------------------------------
// Grunt concat
// -------------------------------------

module.exports = {

  // ----- Concatenate libraries and authored scripts ----- //

  all: {
    src: ['lib/js/**/*.js', 'dev/js/*.js'],
    dest: 'dist/child/js/production.min.js'
  }
};
