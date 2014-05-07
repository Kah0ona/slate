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
    'deploy',
    'dev'
  ],
  
  // ----- Clean child folder for deploy ----- //

  child: [
    'deploy/child'
  ]
};
