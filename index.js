const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateTeam = require("./src/generate");

// First series of prompts (manager)

const teamData = [];
inquirer
  .prompt([
    {
      type: "input",
      name: "Name",
      message: "Enter the team manager's name:",
    },
    {
      type: "input",
      name: "Id",
      message: "Enter the team manager's employee ID:",
    },
    {
      type: "input",
      name: "Email",
      message: "Enter the team manager's email address:",
    },
    {
      type: "input",
      name: "OfficeNumber",
      message: "Enter the team manager's office number:",
    },
  ])
  .then((answers) => {
    let manager = new Manager(
      answers.Name,
      answers.Id,
      answers.Email,
      answers.OfficeNumber
    );
    teamData.push(manager);
    teamPrompt();
  });

// Series of prompts to add more team members or generate HTML page

const teamPrompt = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "memberType",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't need to add any more team members"],
      },
    ])
    .then((answers) => {
      console.log(answers);
      switch (answers.memberType) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        case "I don't need to add any more team members":
          createTeam();
          break;
      }
    });
};

// Series of prompts (engineer)

const addEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "Name",
        message: "Enter the engineer's name:",
      },
      {
        type: "input",
        name: "Id",
        message: "Enter the engineer's employee ID:",
      },
      {
        type: "input",
        name: "Email",
        message: "Enter the engineer's email address:",
      },
      {
        type: "input",
        name: "Github",
        message: "Enter the engineer's GitHub username:",
      },
    ])
    .then((answers) => {
      let engineer = new Engineer(
        answers.Name,
        answers.Id,
        answers.Email,
        answers.Github
      );
      teamData.push(engineer);
      teamPrompt();
    });
};

// Series of prompts (intern)

const addIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "Name",
        message: "Enter the intern's name:",
      },
      {
        type: "input",
        name: "Id",
        message: "Enter the intern's employee ID:",
      },
      {
        type: "input",
        name: "Email",
        message: "Enter the intern's email address:",
      },
      {
        type: "input",
        name: "School",
        message: "Enter the intern's school:",
      },
    ])
    .then((answers) => {
      let intern = new Intern(
        answers.Name,
        answers.Id,
        answers.Email,
        answers.School
      );
      teamData.push(intern);
      teamPrompt();
    });
};

// Generate html page

function createTeam() {
  fs.writeFileSync("./dist/output.html", generateTeam(teamData), "utf-8");
}