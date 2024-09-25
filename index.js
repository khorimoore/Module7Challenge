// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input', 
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage information:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What are the contribution guidelines?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide test instructions:',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Which license are you using?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ];

// TODO: Create a function to write README file
function writeToFile(filename, data) {
const readmeContent = 
generateMarkdown(data);
fs.writeFile(filename, readmeContent, 
  (err) =>
    err ? console.log(err) :
  console.log('Successfully created README.md!')
);
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then((answers) => {
  writeToFile('README.md', answers);
});
}

init();
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## License
  This project is licensed under the ${data.license} License. 

  ## Questions
  If you have any questions you can reach me via:
  -Github: [${data.gitub}](https://github.com/khorimoore/${data.github})
  
  -Email: [${data.email}](https://mail.google.com/mail/u/0/#chat/home/${data.email})
  
 `;
}
