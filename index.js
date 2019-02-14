#!/usr/bin/env node
const figlet = require('figlet');
const chalk = require('chalk');
const inquirer = require('./lib/inquirer');
const commands = require('./lib/commands');

commands.clearConsole();
console.log(
  chalk.yellow(
    figlet.textSync('SSTAPIG', { horizontalLayout: 'full' })
  )
);

const run = async () => {
  const projectInfos = await inquirer.askProjectInfos();
  const { projectDirectory, pkgManager } = projectInfos;

  if (projectInfos) {
    await commands.cloneGitRepo(projectSlug);
    await commands.installDependencies(projectInfos);
  }

  console.log(
    chalk.blue(`All done! now run cd ${projectDirectory} and ${pkgManager} start to start working on your new API =)\n`)
  );
  console.log(
    chalk.white('Do not forget to \n Install a BD manager (pg, mysql2, sqlite3...) \n Update the config file. \n Be happy \\o/ ')
  );
}

run();
