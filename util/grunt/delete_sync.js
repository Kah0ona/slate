// -------------------------------------
// Grunt delete sync
// -------------------------------------

module.exports = {

  // ----- Synchronize php templates ----- //

  php_templates: {
    cwd: 'deploy/child',
    src: '*.php',
    syncWith: 'dev/php/templates'
  },

  // ----- Synchronize php includes ----- //

  php_includes: {
    cwd: 'deploy/child/includes',
    src: '*.php',
    syncWith: 'dev/php/includes'
  },

  // ----- Synchronize images ----- //

  img: {
    cwd: 'deploy/child/img',
    src: '**',
    syncWith: 'dev/img'
  }
};
