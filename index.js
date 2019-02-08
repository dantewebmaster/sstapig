const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('./lib/inquirer');
const files = require('./lib/files');
const github = require('./lib/github');

clear();
console.log(
  chalk.yellow(
    figlet.textSync('SSTAPIG', { horizontalLayout: 'full' })
  )
);

if (files.directoryExists('.git')) {
  console.log(chalk.red('Already a git repository!'));
  process.exit();
}

const run = async () => {
  let projectInfos = await inquirer.askProjectInfos();
  let clonedRepo;
  if (projectInfos) {
    clonedRepo = await github.cloneGitRepo(projectInfos.projectSlug);
  }

  console.log(
    chalk.blue(
      `Project created: ${projectInfos.projectName}`
    )
  );
}

run();
