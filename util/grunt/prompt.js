// -------------------------------------
// Grunt prompt
// -------------------------------------

module.exports = function(grunt) {

  // ----- Scan folders ----- //

  // List files in the src directories
  var templateFiles = grunt.file.expand({filter: "isFile", cwd: "src/php/templates"}, ["*.php","*.child"]);
  var includeFiles = grunt.file.expand({filter: "isFile", cwd: "src/php/includes"}, ["*.php"]);
  var scriptFiles = grunt.file.expand({filter: "isFile", cwd: "src/js"}, ["*.js"]);

  // Make actual choices out of them that grunt-prompt can use
  var templateChoices = templateFiles.map(function (t) {
      return { name: t, checked: false};
  });
  var includeChoices = includeFiles.map(function (t) {
      return { name: t, checked: true};
  });
  var scriptChoices = scriptFiles.map(function (t) {
      return { name: t, checked: true};
  });

  // ----- Initialization prompt ----- //

  return {
    init: {
      options: {
        questions: [{
          // Set the author's name
          config: 'init.author.name',
          type: 'input',
          message: 'What is your name?'
        }, {
          // Set the author's homepage url
          config: 'init.author.website',
          type: 'input',
          default: 'http://www.lokaalgevonden.nl',
          message: "What is your personal website url?"
        }, {
          // Set the name of the project
          config: 'init.project.name',
          type: 'input',
          message: 'What is the name of your project?'
        }, {
          // Set the project's homepage url
          config: 'init.project.website',
          type: 'input',
          message: "What is the project repository's url?" + " " + "(For example: https://github.com/Kah0ona/slate)".green
        }, {
          // Set the project's clone url
          config: 'init.project.cloneurl',
          type: 'input',
          message: "What is the project's git clone url?" + " " + "(For example: https://github.com/Kah0ona/slate.git)".green
        }, {
          // Select templates to be used
          config: 'init.php.templates',
          type: 'checkbox',
          message: 'Which templates do you want to use?',
          choices: templateChoices
        }, {
          // Select includes to be used
          config: 'init.php.includes',
          type: 'checkbox',
          message: 'Which includes do you want to use?',
          choices: includeChoices
        }, {
          // Select scripts to be used
          config: 'init.scripts',
          type: 'checkbox',
          message: 'Which scripts do you want to use?',
          choices: scriptChoices
        }]
      }
    }
  }
};
