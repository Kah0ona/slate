// -------------------------------------
// Grunt svgstore
// -------------------------------------

module.exports = {

// ----- Process all svgs ----- //

  all: {
    options: {
      prefix : 'icon-',
      svg: {
        viewBox : '0 0 100 100',
        "class" : "u-hide"
      }
    },
    files: {
      'dist/child/ico/sprites.svg': ['dev/ico/library/**/*.svg']
    }
  }

};
