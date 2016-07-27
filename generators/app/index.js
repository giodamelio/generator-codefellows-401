const generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function() { // eslint-disable-line object-shorthand
    // Call the super class
    generators.Base.apply(this, arguments);
  },

  prompting() {
    return this.prompt([
    ]).then((answers) => {
      this.answers = answers;
    });
  },

  writing() {
    // Create package.json
    this.fs.writeJSON(
      this.destinationPath('package.json'),
      {
        name: this.answers.directory,
        version: '0.1.0',
        author: this.user.git.name(),
      }
    );

    // Write eslintrc
    this.fs.copyTpl(
      this.templatePath('eslintrc'),
      this.destinationPath('.eslintrc')
    );

    // Write gitignore
    this.fs.copyTpl(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    );
  },

  install() {
    this.npmInstall([
      'eslint',
      'eslint-config-airbnb-base',
      'eslint-plugin-import',
    ], { 'save-dev': true });
  },
});
