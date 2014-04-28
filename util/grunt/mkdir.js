// -------------------------------------
// Grunt mkdir
// -------------------------------------

module.exports = {

  // ----- Create initialization dirs ----- //

  init: {
    options: {
      create: ['dev/fonts',
        'dev/ico',
        'dev/img',
        'lib/js',
        'lib/scss',
        'deploy/css',
        'deploy/fonts',
        'deploy/img',
        'deploy/includes',
        'deploy/js'
      ]
    }
  }
};
