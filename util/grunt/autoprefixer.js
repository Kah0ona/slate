// -------------------------------------
// Grunt Autoprefixer
// -------------------------------------

module.exports = {

  // ----- Develop (with sourcemap) ----- //

  expanded: {
    options: {
      map: true
    },
    src: 'deploy/child/css/production.min.css',
    dest: 'deploy/child/css/production.min.css'
  },

  // ----- Deploy (without sourcemap) ----- //

  compressed: {
    src: 'deploy/child/css/production.min.css',
    dest: 'deploy/child/css/production.min.css'
  }
};
