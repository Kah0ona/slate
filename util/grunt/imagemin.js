// -------------------------------------
// Grunt imagemin
// -------------------------------------

module.exports = {

  // ----- Minify all images ----- //

  all: {
    files: [{
      expand: true,
      cwd: 'src/img',
      src: '*.{png,jpg,gif}',
      dest: 'deploy/img'
    }]
  }
};
