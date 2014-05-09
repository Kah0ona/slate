// -------------------------------------
// Grunt Autoprefixer
// -------------------------------------

module.exports = {

  // ----- Develop (with sourcemap) ----- //

  expanded: {
    options: {
      map: true
    },
    src: 'dist/child/css/production.min.css',
    dest: 'dist/child/css/production.min.css'
  },

  // ----- Deploy (without sourcemap) ----- //

  compressed: {
    src: 'dist/child/css/production.min.css',
    dest: 'dist/child/css/production.min.css'
  }
};
