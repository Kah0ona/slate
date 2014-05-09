// -------------------------------------
// Grunt delete sync
// -------------------------------------

module.exports = {

  // ----- Synchronize php templates ----- //

  php_templates: {
    cwd: 'dist/child',
    src: '*.php',
    syncWith: 'dev/php/templates'
  },

  // ----- Synchronize php includes ----- //

  php_includes: {
    cwd: 'dist/child/includes',
    src: '*.php',
    syncWith: 'dev/php/includes'
  },

  // ----- Synchronize images ----- //

  img: {
    cwd: 'dist/child/img',
    src: '**',
    syncWith: 'dev/img'
  }
};
