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
  const { projectSlug, projectName } = projectInfos;

  if (projectInfos) {
    await commands.cloneGitRepo(projectSlug);
    await commands.installDependencies(projectInfos);
  }

  console.log(
    chalk.blue(`Project created on: ${__dirname + '\\' + projectSlug} and all dependencies installed.\n`)
  );
  console.log(
    chalk.white('Next steps: \n Install a BD manager (pg, mysql2, sqlite3...) \n Update the config file. \n Be happy \\o/ ')
  );
}

run();
