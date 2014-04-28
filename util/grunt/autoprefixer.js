// -------------------------------------
// Grunt Autoprefixer
// -------------------------------------

module.exports = {

  // ----- Develop (with sourcemap) ----- //

  develop: {
    options: {
      map: true
    },
    src: 'build/css/production.min.css',
    dest: 'deploy/css/production.min.css'
  },

  // ----- Deploy (without sourcemap) ----- //

  deploy: {
    src: 'build/css/production.min.css',
    dest: 'deploy/css/production.min.css'
  }
};
