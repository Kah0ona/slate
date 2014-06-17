// -------------------------------------
// Grunt prompt
// -------------------------------------

module.exports = function(grunt) {

  // ----- Scan folders ----- //

  // List files in the src directories
  var templateFiles = grunt.file.expand({filter: "isFile", cwd: "src/php/templates"}, ["*.php","*.child"]);
  var includeFiles = grunt.file.expand({filter: "isFile", cwd: "src/php/includes"}, ["*.php", "*.xml"]);
  var scriptFiles = grunt.file.expand({filter: "isFile", cwd: "src/js"}, ["*.js"]);

  // Make actual choices out of them that grunt-prompt can use
  var templateChoices = templateFiles.map(function (t) {
      return { name: t, checked: true};
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
          config: 'authorName',
          type: 'input',
          message: 'What is your name?'
        }, {
          // Set the author's homepage url
          config: 'authorWebsite',
          type: 'input',
          default: 'http://www.lokaalgevonden.nl',
          message: "What is your personal website url?"
        }, {          
          // Set the author's homepage url
          config: 'authorMail',
          type: 'input',
          message: "What is your email address?"
        }, {
          // Set the name of the project
          config: 'projectName',
          type: 'input',
          message: 'What is the name of your project?',
          filter: function(slugString) {
            return slugString.replace(/ /g, '-').replace(/\./, '-').toLowerCase();
          }
        }, 
		{
          config: 'clientMail',
          type: 'input',
          message: "What is the CLIENT's email address?"
		},
		{
          config: 'clientPhone',
          type: 'input',
          message: "What is the CLIENT's main phone number?"
		},
		{
          config: 'clientStreet',
          type: 'input',
          message: "What is the CLIENT's street+number?"
		},
		{
          config: 'clientZipcode',
          type: 'input',
          message: "What is the CLIENT's zipcode/postcode?"
		},
		{
          config: 'clientCity',
          type: 'input',
          message: "What is the CLIENT's city?"
		},
		{
          // Set the project's homepage url
          config: 'projectWebsite',
          type: 'input',
          message: "What is the project repository's website url?" + " " + "(For example: https://github.com/yourName/repoName)".green
        }, {
          // Set the project's clone url
          config: 'projectCloneUrl',
          type: 'input',
          message: "What is the project repository's clone url?" + " " + "(For example: https://github.com/yourName/repoName.git)".green
        }, {
          // Select templates to be used
          config: 'chosenTemplates',
          type: 'checkbox',
          message: 'Which templates do you want to use?',
          choices: templateChoices
        }, {
          // Select includes to be used
          config: 'chosenIncludes',
          type: 'checkbox',
          message: 'Which includes do you want to use?',
          choices: includeChoices
        }, {
          // Select scripts to be used
          config: 'chosenScripts',
          type: 'checkbox',
          message: 'Which scripts do you want to use?',
          choices: scriptChoices
        }]
      }
    }
  }
};
