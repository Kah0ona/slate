// -------------------------------------
// Grunt prompt
// -------------------------------------

// ----- Read filenames ----- //

var fs = require("fs");
var phpTemplates = [];
var phpIncludes = [];
var jsScripts = [];
var list = function (path, target) {
  fs.readdirSync(path).forEach(function (file) {
    if(fs.lstatSync(path + '/' +file).isDirectory())
      list(path + '/' +file);
    else
      target.push({name: file});
  });
}
list("src/php/templates", phpTemplates);
list("src/php/includes", phpIncludes);
list("src/js", jsScripts);

module.exports = {

  // ----- Initialization prompt ----- //

  init: {
    options: {
      questions: [{
        // Set the authors name
        config: 'init.author.name',
        type: 'input',
        message: 'What is your name?'
      }, {
        // Set the name of the project
        config: 'init.project.name',
        type: 'input',
        message: 'What is the name of your project?'
      }, {
        // Select templates to be used
        config: 'init.php.templates',
        type: 'checkbox',
        message: 'Which templates do you want to use?',
        choices: phpTemplates
      }, {
        // Select includes to be used
        config: 'init.php.includes',
        type: 'checkbox',
        message: 'Which includes do you want to use?',
        choices: phpIncludes
      }, {
        // Select scripts to be used
        config: 'init.scripts',
        type: 'checkbox',
        message: 'Which scripts do you want to use?',
        choices: jsScripts
      }]
    }
  }
};
