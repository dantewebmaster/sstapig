#!/usr/bin/env node
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('./lib/inquirer');
const commands = require('./lib/commands');
const github = require('./lib/github');
const path = require('path');

clear();
console.log(
  chalk.yellow(
    figlet.textSync('SSTAPIG', { horizontalLayout: 'full' })
  )
);

const run = async () => {
  const projectInfos = await inquirer.askProjectInfos();
  const { projectSlug, projectName } = projectInfos;

  if (projectInfos) {
    await github.cloneGitRepo(projectSlug);
    await commands.installDependencies(projectInfos);
  }

  console.log(
    chalk.blue(`Project created on: ${projectName} and all dependencies installed.\n`)
  );
  console.log(
    chalk.white('Next steps: Install a BD manager (pg, mysql2, sqlite3...) and update the config file.')
  );
}

run();
