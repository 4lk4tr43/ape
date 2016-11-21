//noinspection SpellCheckingInspection
var semver = require('semver');
var chalk = require('chalk');
var packageConfig = require('../package.json');
var exec = function (cmd) {
  return require('child_process')
    .execSync(cmd).toString().trim()
};

var versionRequirements = [
  {
    name: 'node',
    currentVersion: semver.clean(process.version),
    versionRequirement: packageConfig.engines.node
  },
  {
    name: 'npm',
    currentVersion: exec('npm --version'),
    versionRequirement: packageConfig.engines.npm
  }
];

module.exports = function () {
  var warnings = [];
  versionRequirements.forEach(function(mod) {
    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
      warnings.push(mod.name + ': ' +
        chalk['red'](mod.currentVersion) + ' should be ' +
        chalk['green'](mod.versionRequirement)
      )
    }
  });

  if (warnings.length) {
    console.log('');
    console.log(chalk['yellow']('To use this template, you must update following to modules:'));
    console.log();
    warnings.forEach(function(warning){
      console.log('  ' + warning)
    });
    console.log();
    process.exit(1)
  }
};
