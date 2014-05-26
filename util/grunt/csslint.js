// -------------------------------------
// Grunt Csslint
// -------------------------------------

module.exports = {

  // ----- Default options ----- //

  options: {
    csslintrc: '.csslintrc'
  },

  // ----- Compressed ----- //

  compressed: {
    src: ['dist/child/css/production.min.css']
  },

  // ----- Expanded ----- //

  expanded: {
    src: ['dist/child/css/production.css']
  }

};
