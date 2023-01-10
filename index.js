const Manager = require("/Users/colint771/bootcamp/team-profile-generator/lib/Manager.js");
const Engineer = require("/Users/colint771/bootcamp/team-profile-generator/lib/Engineer.js");
const Intern = require("/Users/colint771/bootcamp/team-profile-generator/lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const output_dir = path.resolve(__dirname, "output");
const outputPath = path.join(output_dir, "team.html");
const generateTeam = require("/Users/colint771/bootcamp/team-profile-generator/src/temp.js");
const { listenerCount } = require("process");

teamArray = []

function runApp () {
    function createTeam () {
        inquirer.prompt([{
            type: "list",
            message: "Which type of employee do you want to add to your team?",
            name: ["Manager", "Engineer", "Intern", "N/A"]
        }]).then(function (userInput) {
            switch(userInput.addEmployeePrompt) {
                case "Manager": 
                    add.Manager();
                    break;
                case "Engineer":
                    add.Engineer();
                    break;
                case "Intern":
                    add.Intern();
                    break;
                
                default:
                    htmlBuilder();

            }
        })
    }

function addManager() {
    inquirer.prompt ([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?",
        },

        {
            type: "input",
            name: "managerId",
            message: "What is the manager's ID number?",
        },

        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email?",
        },

        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the manager's office number?",
        }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamArray.push(manager);
        createTeam();
    });
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
        },

        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's ID number?"
        },

        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email?",
        },

        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's GitHub?"
        },
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(engineer);
        createTeam();
    });
}

function addIntern() {
    inquirer.prompt([

        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?"
        },

        {
            type: "input",
            name: "internId",
            message: "What is the intern's ID number?"
        },

        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email?"
        },

        {
            type: "input",
            name: "internSchool",
            message: "Where does the intern go to school?"
        }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamArray.push(intern);
        createTeam();
    });
}

function htmlGenerator () {
    console.log("Team Created!")

    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")
}

createTeam();

}

runApp();