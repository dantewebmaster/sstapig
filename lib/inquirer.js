const inquirer = require('inquirer');

const validateInput = (fieldName, value) => {
  if (!fieldName)
    return

  if (value.length) {
    return true;
  } else {
    return `Please enter the ${fieldName}`;
  }
}

module.exports = {

  askProjectInfos: () => {
    const questions = [
      {
        name: 'projectName',
        type: 'input',
        message: 'Enter the project description:',
        validate: (value) => validateInput('Project description', value),
      },
      {
        name: 'projectSlug',
        type: 'input',
        message: 'The project folder:',
        validate: (value) => validateInput('Project folder', value),
      },
      {
        name: 'pkgManager',
        type: 'list',
        choices: ["npm", "yarn"],
        message: 'What package manager do you use?',
        validate: (value) => validateInput('Node package manager', value),
      },
    ];

    return inquirer.prompt(questions);
  },
}
