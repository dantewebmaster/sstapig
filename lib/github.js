const CLI = require('clui');
const Spinner = CLI.Spinner;
const git = require('simple-git/promise');

module.exports = {

  cloneGitRepo: async (localRepoName) => {
    const status = new Spinner('Cloning repo, please wait...');
    status.start();

    const repoPath = 'https://github.com/dantewebmaster/starter-theme-html';

    try {
      await git()
        .silent(true)
        .clone(repoPath, localRepoName)
    } catch (err) {
      throw err;
    } finally {
      status.stop();
    }
  }

}
