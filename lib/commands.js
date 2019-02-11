const shell = require('shelljs');
const CLI = require('clui');
const Spinner = CLI.Spinner;

module.exports = {

  installDependencies: async (projectInfos) => {
    const { projectSlug, pkgManager } = projectInfos;
    const status = new Spinner('Installing dependencies, please wait...');
    status.start();

    try {
      await shell.cd(projectSlug);
      await shell.exec(`${pkgManager} install`);
    } catch (err) {
      throw err;
    } finally {
      status.stop();
    }
  }
}
