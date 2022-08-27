
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const outputDir = path.resolve(__dirname, "output");
const outputFile = path.join(outputDir, "team.html");

const template = require("./src/team-template");
const profile = [];


  function createManager(){
    
    return inquirer.prompt(
      [
        {
          type: "input",
          name: "name",
          message: "Enter team member's name.",
        },
        {
          type: "input",
          name: "role",
          message: "Select team member's role.",
          choices: ["Manager", "Engineer", "Intern"],
        },
        {
          type: "input",
          name: "id",
          message: "Enter member ID.",
        },
        {
          type: "input",
          name: "email",
          message: "Enter members email address",
        },
        {
          type: "input",
          name: "office",
          message: "What is your office number?",
        },
        
      ]
    ) 
    .then(answers => {
      const manager = new Manager(answers.mgrName);
      profile.push(manager);
    })
    teamOptions();
  }
  function teamOptions(){

  }
  function createEngineer(){
    return inquirer.prompt(
      [
        {
          type: "input",
          name: "name",
          message: "What is your name?",
        },
        {
          type: "input",
          name: "role",
          message: "What is your role?",
          choices: ["Manager", "Engineer", "Intern"],
        },
        {
          type: "input",
          name: "id",
          message: "What is your ID number?",
        },
        {
          type: "input",
          name: "email",
          message: "What is your email address?",
        },
        {
          type: "input",
          name: "github",
          message: "What is your GitHub URL?",
        },
      ]
    )
    .then(answers => {
      const engineer = new Engineer(answers.engName);
      profile.push(engineer);
    });
    teamOptions();
  }
  function createIntern(){
    return inquirer.prompt(
      [
        {
          type: "input",
          name: "name",
          message: "What is your name?",
        },
        {
          type: "input",
          name: "role",
          message: "What is your role?",
          choices: ["Manager", "Engineer", "Intern"],
        },
        {
          type: "input",
          name: "id",
          message: "What is your ID number?",
        },
        {
          type: "input",
          name: "email",
          message: "What is your email address?",
        },
        {
          type: "input",
          name: "intern",
          message: "What school are you attending?",
        },
      ]
    )
    .then(answers => {
      const intern = new Intern(answers.intName);
      profile.push(intern);
    });
    teamOptions();
  }

  function buildTeam(){
    if (!fs.existSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }
    fs.writeFileSync(outputFile, template(profile), "utf-8")
  }

createManager().then(createEngineer).then(createManager).then(createIntern).then(buildTeam)
