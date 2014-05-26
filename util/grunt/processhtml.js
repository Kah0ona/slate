// -------------------------------------
// Grunt Processhtml
// -------------------------------------

module.exports = {

  // ----- Compressed ----- //

  compressed: {
    options: {
      strip: true
    },
    files: {
      'dist/child/header.php': ['dist/child/header.php'],
      'dist/child/footer.php': ['dist/child/footer.php']
    }
  },

  // ----- Expanded ----- //

  expanded: {
    files: {
      'dist/child/header.php': ['dist/child/header.php'],
      'dist/child/footer.php': ['dist/child/footer.php']
    }
  }
};
