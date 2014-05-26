// -------------------------------------
// Grunt Jsbeautifier
// -------------------------------------

module.exports = {

  "js": {
    src : ["src/js/*.js"],
    options: {
      config: ".jsbeautifyrc"
    }
  }

};
