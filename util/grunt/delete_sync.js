// -------------------------------------
// Grunt delete sync
// -------------------------------------

module.exports = {

  // ----- Synchronize php templates ----- //

  php_templates: {
    cwd: 'deploy',
    src: '*.php',
    syncWith: 'dev/php/templates'
  },

  // ----- Synchronize php includes ----- //

  php_includes: {
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
