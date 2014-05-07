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
        'deploy/child/css',
        'deploy/child/fonts',
        'deploy/child/img',
        'deploy/child/includes',
        'deploy/child/js'
      ]
    }
  }
};
