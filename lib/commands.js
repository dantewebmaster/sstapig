const shell = require('shelljs');
const CLI = require('clui');
const Spinner = CLI.Spinner;
const files = require('./files');

module.exports = {

  installDependencies: async (projectInfos) => {
    const { projectSlug, pkgManager } = projectInfos;
    const status = new Spinner('Installing dependencies, please wait...');
    status.start();

    try {
      await shell.cd(projectSlug);
      await shell.exec(`${pkgManager} install`);
      await shell.exec('rm -Rf .git');
    } catch (err) {
      throw err;
    } finally {
      status.stop();
    }
  },

  changeDir: (newDir) => {
    return shell.cd(newDir);
  }
}
