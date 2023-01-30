const fs = require("fs");
const inquirer = require("inquirer");
// const generateMarkdown = require('./generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the title of your project",
      },
      {
        type: "input",
        name: "description",
        message: "Please enter the description of your project",
      },
      {
        type: "input",
        name: "installation",
        message: "Please enter the instructions for your project installation",
      },
      {
        type: "input",
        name: "usage",
        message: "Please enter your project usage information",
      },
      {
        type: "list",
        name: "license",
        choices: ["MIT", "Apache", "GPL", "None"],
      },
      {
        type: "input",
        name: "contribution",
        message: "Please enter the contribution requirements for your project",
      },
      {
        type: "input",
        name: "tests",
        message: "Please enter your project testing instructions",
      },
      {
        type: "input",
        name: "github",
        message: "Please enter your GitHub username",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your email address",
      },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log('Successfully created README.md file')
    );
}

// Function to initialize app
function init() {
    const prompt = inquirer.createPromptModule();
    prompt(questions)
    .then((answers) => {
        const mdPageContent = generateMarkdown(answers);
        writeToFile('./output/README.md', mdPageContent);
    });
}

// Function call to initialize app
init();