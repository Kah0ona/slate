// -------------------------------------
// Grunt delete sync
// -------------------------------------

module.exports = {

  // ----- Synchronize php templates ----- //

  phptemplates: {
    cwd: 'src/php/templates',
    src: '*.php',
    syncWith: 'deploy'
  },

  // ----- Synchronize php includes ----- //

  phpincludes: {
    cwd: 'src/php/includes',
    src: '*.php',
    syncWith: 'deploy/includes'
  },

  // ----- Synchronize images ----- //

  img: {
    cwd: 'src/img',
    src: '**',
    syncWith: 'deploy/img'
  }
};
