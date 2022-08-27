
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

function menu() {

  function createManager(){

    teamOptions();
  }
  function teamOptions(){

  }
  function createEngineer(){

    teamOptions();
  }
  function createIntern(){

    teamOptions();
  }
  function buildTeam(){
    if (!fs.existSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }
    fs.writeFileSync(outputFile, template(profile), "utf-8")
  }

createManager();
};
menu();

inquirer.prompt(
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
      name: "office",
      message: "What is your office number?",
    },
    
  ]
) 
.then(answers => {
  const manager = new Manager(answers.mgrName);
  profile.push(manager);
})
