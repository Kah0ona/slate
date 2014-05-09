// -------------------------------------
// Grunt Clean
// -------------------------------------

module.exports = {

  // ----- Clean up for initialization ----- //

  init: [
    '.grunt',
    '.sass-cache',
    'bower_components',
    'build',
    'dist',
    'dev'
  ],
  
  // ----- Clean child folder for deploy ----- //

  child: [
    'dist/child'
  ]
};
