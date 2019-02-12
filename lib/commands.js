const shell = require('shelljs');
const clear = require('clear');
const Spinner = require('cli-spinner').Spinner;

module.exports = {

  installDependencies: async (projectInfos) => {
    const { projectSlug, pkgManager } = projectInfos;
    const spinner = new Spinner('%s Installing dependencies... \n');
    spinner.setSpinnerString(9);
    spinner.start();

    try {
      await shell.cd(projectSlug);
      await shell.exec(`${pkgManager} install`);
      await shell.exec('rm -Rf .git');
    } catch (err) {
      throw err;
    } finally {
      spinner.stop();
    }
  },

  cloneGitRepo: async (localRepoName) => {
    const spinner = new Spinner('%s Fetching required packages... \n');
    spinner.setSpinnerString(9);
    spinner.start();

    const repoPath = 'https://github.com/dantewebmaster/sstapi.git';

    try {
      await shell.exec(`git clone ${repoPath} ${localRepoName}`, { silent: true })
    } catch (err) {
      throw err;
    } finally {
      spinner.stop();
    }
  },

  clearConsole: () => {
    return clear();
  },
}
