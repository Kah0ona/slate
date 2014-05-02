// -------------------------------------
// Grunt Autoprefixer
// -------------------------------------

module.exports = {

  // ----- Develop (with sourcemap) ----- //

  expanded: {
    options: {
      map: true
    },
    src: 'deploy/css/production.min.css',
    dest: 'deploy/css/production.min.css'
  },

  // ----- Deploy (without sourcemap) ----- //

  compressed: {
    src: 'deploy/css/production.min.css',
    dest: 'deploy/css/production.min.css'
  }
};
