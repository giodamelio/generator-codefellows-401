const generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function() { // eslint-disable-line object-shorthand
    // Call the super class
    generators.Base.apply(this, arguments);
  },

  writing() {
    // Write eslintrc
    this.fs.copyTpl(
      this.templatePath('eslintrc'),
      this.destinationPath('.eslintrc')
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
