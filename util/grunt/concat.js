// -------------------------------------
// Grunt concat
// -------------------------------------

module.exports = {

  // ----- Concatenate libraries and authored scripts ----- //

  develop: {
    src: ['lib/js/**/*.js', 'src/js/*.js'],
    dest: 'deploy/js/production.min.js'
  }
};
