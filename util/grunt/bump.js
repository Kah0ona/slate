// -------------------------------------
// Grunt Bump
// -------------------------------------

module.exports = {

  options: {
    files: ['package.json', 'bower.json'],
    commit: true,
    commitMessage: 'Release v%VERSION%',
    commitFiles: ['package.json', 'bower.json'],
    createTag: true,
    tagName: 'v%VERSION%',
    tagMessage: 'Version %VERSION%',
    push: true,
    pushTo: 'upstream',
    gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
  }

};
