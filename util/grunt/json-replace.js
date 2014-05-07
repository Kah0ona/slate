// -------------------------------------
// Grunt json replace
// -------------------------------------

module.exports = {

    "init_npm": {
      "options": {
        "space": "\t",
        "replace": {
            "name": "<%= projectName %>",
            "author": {
              "name": "<%= authorName %>",
              "email": "<%= authorMail %>",
              "url": "<%= authorWebsite %>"
            }
        }
      },
      "files" : [{
        "src" : "package.json",
        "dest" : "package.json"
      }]
    },

    "init_bower": {
      "options": {
        "space" : "\t",
        "replace" : {
            "name" : "<%= projectName %>",
            "authors" : "<%= authorName %> <<%= authorMail %>>"
        }
      },
      "files" : [{
        "src" : "bower.json",
        "dest" : "bower.json"
      }]
    }

};
