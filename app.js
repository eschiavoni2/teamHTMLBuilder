const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];
const idArray = [];

function mainMenu() {
    function createManager() {
        console.log("Please Build your Team")
        inquirer.prompt([{
            type: "input",
            name: "managerName",
            message: "What is your manager's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a name"
                // if Array.includes can validate
            },
        },
        {
            type: "number",
            name: "managerID",
            message: "What is your manager's ID?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter ID."
            },
        },
          {  
            
            type: "input",
            name: "managerEmail",
            message: "What is your manager's email?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter email."
            },
        },
          {  
            type: "number",
            name: "managerNumber",
            message: "What is your manager's number?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter number."
            }
            
        }]).then(answer => {
            const manager = new Manager(answer.managerName, answer.managerID, answer.managerEmail, answer.managerNumber)
            teamMembers.push(manager)
            idArray.push(answer.managerID)
            nextTeamMember();
            console.log(teamMembers)

        })
    }
    createManager()
}

function nextTeamMember() {
    inquirer.prompt([{
        type: "list",
        name: "memberChoice",
        message: "Which team member would you like to add?",
        choices: ["Intern", "Engineer", "I don't want another team member."],
    }]).then(answer => {
        console.log(answer.memberChoice);
        if (answer.memberChoice === "Intern") {
            createIntern();
        }
        if (answer.memberChoice === "Engineer") {
            createEngineer();
        }
        if (answer.memberChoice === "I don't want another team member") {
            console.log("Finalize team.")
            console.log(idArray);
            console.log(teamMembers);
    }
    })
}

function createIntern() {
        console.log("Please fill out Intern information")
        inquirer.prompt([{
            type: "input",
            name: "internName",
            message: "What is your intern's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a name"
                // if Array.includes can validate
            },
        },
        {
            type: "number",
            name: "internID",
            message: "What is your intern's ID?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter ID."
            },
        },
          {  
            
            type: "input",
            name: "internRole",
            message: "What is your role?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter role."
            },
        },
          {  
            type: "input",
            name: "internSchool",
            message: "What school did you attend?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter school."
            }
            
        }]).then(answer => {
            const intern = new Intern(answer.internName, answer.internID, answer.internRole, answer.internSchool)
            teamMembers.push(intern)
            idArray.push(answer.internID)
            nextTeamMember();
            console.log(teamMembers)

        })
    }
  



function createEngineer() {
        console.log("Please fill out Engineer information")
        inquirer.prompt([{
            type: "input",
            name: "engineerName",
            message: "What is your Engineer's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a name"
                // if Array.includes can validate
            },
        },
        {
            type: "number",
            name: "engineerID",
            message: "What is your engineer's ID?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter ID."
            },
        },
          {  
            
            type: "input",
            name: "engineerRole",
            message: "What is your role?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter role."
            },
        },
          {  
            type: "input",
            name: "engineerGitHub",
            message: "What school did you attend?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter school."
            }
            
        }]).then(answer => {
            const engineer = new Engineer(answer.engineerName, answer.engineerID, answer.engineerRole, answer.engineerGitHub)
            teamMembers.push(engineer)
            idArray.push(answer.engineerID)
            nextTeamMember();
            console.log(teamMembers)

        })
    }

    mainMenu()

    .then(function (answer) {
        const html = Employee(answer);
        fs.writeFile('./lib/Employee.md', html, function (err) {
            if (err) throw err;
            console.log("Success!");
        });
    })

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
