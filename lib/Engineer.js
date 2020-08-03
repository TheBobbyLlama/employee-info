Employee = require("./Employee");

class Engineer extends Employee {
	constructor(myName, myId, myEmail, myGithub) {
		super(myName, myId, myEmail);
		this.github = myGithub;
	}

	getGithub() {
		return this.github;
	}

	getRole() {
		return "Engineer";
	}

	getCardInfo() {
		return `GitHub: <a href="https://github.com/${getGithub()}/" target="_blank">${getGithub()}</a>`;
	}
}

module.exports = Engineer;