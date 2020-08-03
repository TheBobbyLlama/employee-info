const fs = require("fs");
const inquirer = require("inquirer");
const generatePage = require("./src/page-template");
const { writeFile, copyFile } = require('./utils/generate-site.js');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const getEmployee = function(results) {
	inquirer
	.prompt([{
		type: "text",
		name: "name",
		message: "What is the employee's name?",
		validate: input => {
			if (input) {
				return true;
			} else {
				console.log("Employees must have a name!");
				return false;
			}
		}
	},
	{
		type: "text",
		name: "id",
		message: "What is the employee's ID number?",
		validate: input => {
			if (input) {
				return true;
			} else {
				console.log("Employees must have an ID number!");
				return false;
			}
		}
	},
	{
		type: "text",
		name: "email",
		message: "What is the employee's email address?",
		validate: input => {
			if (input) {
				return true;
			} else {
				console.log("Employees must have an email address!");
				return false;
			}
		}
	},
	{
		type: "list",
		name: "role",
		message: "What type of employee is this?",
		choices: [ "Manager", "Engineer", "Intern" ]
	},
	{
		type: "text",
		name: "officeNumber",
		message: "What is the manager's office number?",
		validate: input => {
			if (input) {
				return true;
			} else {
				console.log("Managers must have an office number!");
				return false;
			}
		},
		when: ({ role }) => role === "Manager"
	},
	{
		type: "text",
		name: "github",
		message: "What is the engineer's Github name?",
		validate: input => {
			if (input) {
				return true;
			} else {
				console.log("Engineers must have a Github name!");
				return false;
			}
		},
		when: ({ role }) => role === "Engineer"
	},
	{
		type: "text",
		name: "school",
		message: "Which school is the intern from?",
		validate: input => {
			if (input) {
				return true;
			} else {
				console.log("Interns must have a school!");
				return false;
			}
		},
		when: ({ role }) => role === "Intern"
	},
	{
		type: 'confirm',
		name: 'confirmAnother',
		message: 'Would you like to enter another employee?',
		default: true
	}])
	.then((answers) => {
		// Typecasting voodoo.  Could have just created a new object but I decided to be fancy.
		switch (answers.role) {
			case "Manager":
				results.push(Object.setPrototypeOf(answers, Manager.prototype));
				break;
			case "Engineer":
				results.push(Object.setPrototypeOf(answers, Engineer.prototype));
				break;
			case "Intern":
				results.push(Object.setPrototypeOf(answers, Intern.prototype));
				break;
			default:
				throw new Error(`Invalid role selected: ${answers.role}`);
		}

		if (answers.confirmAnother) {
			getEmployee(results);
		} else {
			createOutput(results);
		}
	});
}

const createOutput = function(results) {
	console.log(results);
	const pageOutput = generatePage(results);

	writeFile(pageOutput).then(({message}) => {
		console.log(message);
		return copyFile();
	  })
	  .then(copyFileResponse => {})
	  .catch(err => {
		console.log(err);
	  });
}

getEmployee([]);