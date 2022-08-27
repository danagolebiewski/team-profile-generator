// import Engineer from "./lib/Engineer.js";
// import Intern from "./lib/Intern.js";
// import Manger from "./lib/Manager.js";

// import inquirer from "inquirer";
// console.log("Hello World");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const engineer = new Engineer();
const intern = new Intern ();
const manager = new Manager();

var questions = [
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
  {
    type: "input",
    name: "github",
    message: "What is your GitHub URL?",
  },
  {
    type: "input",
    name: "school",
    message: "What school are you attending?",
  },  
]

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};
function init() {
  inquirer.prompt(questions)
  .then(answers => {
    console.log("success");
    writeToFile("index.html", generateMHTML({ ...answers}));
});
}
init();