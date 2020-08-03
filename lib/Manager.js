Employee = require("./Employee");

class Manager extends Employee {
	constructor(myName, myId, myEmail, myOffice) {
		super(myName, myId, myEmail);
		this.officeNumber = myOffice;
	}

	getOfficeNumber() {
		return this.officeNumber;
	}

	getRole() {
		return "Manager";
	}

	getCardInfo() {
		return `Office Number: ${getOfficeNumber()}`;
	}
}

module.exports = Manager;