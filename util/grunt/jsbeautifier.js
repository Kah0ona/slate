// -------------------------------------
// Grunt Jsbeautifier
// -------------------------------------

module.exports = {

  "js": {
    src : ["dev/js/*.js"],
    options: {
      config: ".jsbeautifyrc"
    }
  }

};
