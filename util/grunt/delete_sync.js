// -------------------------------------
// Grunt delete sync
// -------------------------------------

module.exports = {

  // ----- Synchronize php templates ----- //

  phptemplates: {
    cwd: 'dev/php/templates',
    src: '*.php',
    syncWith: 'deploy'
  },

  // ----- Synchronize php includes ----- //

  phpincludes: {
    cwd: 'dev/php/includes',
    src: '*.php',
    syncWith: 'deploy/includes'
  },

  // ----- Synchronize images ----- //

  img: {
    cwd: 'dev/img',
    src: '**',
    syncWith: 'deploy/img'
  }
};
