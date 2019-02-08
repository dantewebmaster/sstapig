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
        message: 'Enter the project name:',
        validate: (value) => validateInput('Project name', value),
      },
      {
        name: 'projectSlug',
        type: 'input',
        message: 'The project slug:',
        validate: (value) => validateInput('Project slug', value),
      },
    ];

    return inquirer.prompt(questions);
  },
}
