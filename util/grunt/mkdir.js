// -------------------------------------
// Grunt mkdir
// -------------------------------------

module.exports = {

  // ----- Create initialization dirs ----- //

  init: {
    options: {
      create: [
        'dev/fonts',
        'dev/ico',
        'dev/img',
        'lib/js',
        'lib/scss',
        'dist/child/css',
        'dist/child/fonts',
        'dist/child/img',
        'dist/child/includes',
        'dist/child/js'
      ]
    }
  }
};
