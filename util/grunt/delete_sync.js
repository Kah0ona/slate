// -------------------------------------
// Grunt delete sync
// -------------------------------------

module.exports = {

  // ----- Synchronize php templates ----- //

  phptemplates: {
    cwd: 'deploy',
    src: '*.php',
    syncWith: 'dev/php/templates'
  },

  // ----- Synchronize php includes ----- //

  phpincludes: {
    cwd: 'deploy/includes',
    src: '*.php',
    syncWith: 'dev/php/includes'
  },

  // ----- Synchronize images ----- //

  img: {
    cwd: 'deploy/img',
    src: '**',
    syncWith: 'dev/img'
  }
};
