const inquirer = require("inquirer");
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'normandy',
        database: 'enterprise_db'
    },
    console.log(`Connected to the employee_db database.`)
);

const roles = [];

const employees = [];

const managers = [];
// function getManagers();
const departments = [];


const options = [{
    type: "list",
    message: "Please select one of the below options.",
    choices: [
        "View All Employees.",
        "View our Employees by department.",
        "View all employee roles.",
        "View all departments.",
        "Update a current employee.",
        "Add a New Employee.",
        "Add a New Role.",
        "Add New Department.",
        "Delete Employee."
    ],
    name: "choices",
}];

function enterprise() {
    inquirer.prompt(options).then((data) => {
        switch (data.choices) {
            case "View All Employees.":
                viewEmployees();
                break;
            case "View our Employees by department.":
                viewDepartmentEmployees();
                break;
            case "View all employee roles.":
                viewRoles();
                break;
            case "View all departments.":
                viewDepartments();
                break;
            case "Update a current employee.":
                updateEmployee();
                break;
            case "Add a New Employee.":
                addEmployee();
            case "Add a New Role.":
                addRole();
                break;
            case "Add New Department.":
                addDepartment();
                break;
            case "Delete Employee.":
                deleteEmployee();
                break;
        }
    });
}

function viewEmployees() {
    console.log("all employee");
    db.query(`SELECT * FROM employee;`, (err, res) => {
        if (err) {
            console.log(err);
        }
        console.table(res);
        enterprise();
    });
};
//
// function viewDepartmentEmployees() {
//     console.log("department employees");
//     db.query(`SELECT...;`, (err, res) => {
//         if (err) {
//             console.log(err);
//         }
//         console.table(res);
//         enterprise();
//     });
// };
//
function viewRoles() {
    console.log("all roles");
    db.query(`SELECT * FROM role;`, (err, res) => {
        if (err) {
            console.log(err);
        }
        console.table(res);
        enterprise();
    });
};
//
function viewDepartments() {
    console.log("all departments");
    db.query(`SELECT * FROM department;`, (err, res) => {
        if (err) {
            console.log(err);
        };
        console.table(res);
        enterprise();
    });
};
//
function updateEmployee() {
    function getEmployees() {
        db.query(`SELECT employee.last_name FROM employee;`, (err, res) => {
            for (let i = 0; i < res.length; i++) {
                employees.push(res[i].title)
            };
        });
    };
    getEmployees();

    function getRoles() {
        db.query(`SELECT * FROM role;`, (err, res) => {
            for (let i = 0; i < res.length; i++) {
                roles.push(res[i].title)
            };
        });
    };
    getRoles();


    inquirer.prompt([
        {
            type: "list",
            message: "Please select an employee to update.",
            choices: employees,
            name: "empName"
        },
        {
            type: "list",
            message: "Please assign new role.",
            choices: roles,
            name: "newRole"
        },
    ]).then((data) => {
        console.log("update employee");
        db.query(`UPDATE employee SET role = ${data.newRole} WHERE first_name = ${data.empName};`, (err, res) => {
            if (err) {
                console.log(err);
            };
            console.table(res);
            enterprise();
        })
    })


};
//
function addEmployee() {
    console.log("add employee");
    inquirer.prompt([
        {
            type: "input",
            message: "What is the new employees first name?",
            name: "firstName",
        },
        {
            type: "input",
            message: "What is the new employees last name?",
            name: "lastName",
        },
        {
            type: "input",
            message: "What is the new employee's role id?",
            name: "roleID",
        },
        {
            type: "input",
            message: "Who is the new employees manager?",
            name: "manager"
        },
    ])
    db.query(`INSERT INTO employee (first_name, last_name, role_id, manager)
    VALUE   ("${data.firstName}", "${data.lastName}", "${data.roleID}", "${data.manager}");`)
};
//
function addRole() {
    console.log("add role");
    inquirer
        .prompt([{
            type: "input",
            message: "What is the name of the new role?",
            name: "role",
        },
        {
            type: "input",
            message: "what is this role's salary?",
            name: "salary",
        },
        {
            type: "input",
            message: "What department does this role work in?",
            name: "department",
        }
        ]).then((data) => {
            db.query(`INSERT INTO role (department_id, title, salary)
    VALUES (${data.department}, "${data.role}", ${data.salary});`, (err, res) => {
                if (err) {
                    console.log(err);
                }
                console.table(res);
                enterprise();
            })
        })
};
//
function addDepartment() {
    console.log("add department");
    inquirer.prompt([{
        type: "input",
        message: "Please name the department.",
        name: "deptName",
    },
    ]).then((data) => {
        db.query(`INSERT INTO department (name) VALUE ("${data.deptName}");`, (err, res) => {
            if (err) {
                console.log(err);
            }
            console.table(res);
            enterprise();
        })
    })
}
//
// function deleteEmployee() {
//     console.log("delete employee");
//     inquirer
//         .prompt([
//             {
//                 type: "input",
//                 message: "Please select an ID to delete.",
//                 name: "deleteID",
//             },
//         ]).then((data) => {
//             db.query(`DELETE employee WHERE id = ${data.deleteID};`, (err, res) => {
//                 if (err) {
//                     console.log(err);
//                 };
//                 console.log("Employee removed from database");
//                 console.table(res);
//                 enterprise();
//             });
//         })
//  };

enterprise();