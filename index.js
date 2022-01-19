const { randomUUID } = require("crypto");

const inquirer = require("inquire"),;
const { listenerCount } = require("process");

const options = [{
    type: "list",
    message: "Please select one of the below options.",
    choices: [
        "View All Employees.",
        "View our Employees by department.",
        "View all employee roles.",
        "Update a current employee.",
        "Add a New Employee.",
        "Add a New Role.",
        "Add New Department."
    ]
}];

function userPrompt() {
    inquirer.prompt(options) {
        //switch case through options
    }
}