// -------------------------------------
// Grunt Csslint
// -------------------------------------

module.exports = {

  options: {
    csslintrc: '.csslintrc'
  },

// ----- Strict rules ----- //

  strict: {
    src: ['dist/child/css/production.min.css']
  },

// ----- Lax rules ----- //

  lax: {
    src: ['dist/child/css/production.min.css']
  }
};
