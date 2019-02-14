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
        name: 'projectDesc',
        type: 'input',
        message: 'Enter the project description:',
        validate: (value) => validateInput('Project description', value),
      },
      {
        name: 'projectDirectory',
        type: 'input',
        message: 'The project directory name:',
        validate: (value) => validateInput('Project directory', value),
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
