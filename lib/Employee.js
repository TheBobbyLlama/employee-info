class Employee {
	constructor(myName, myId, myEmail) {
		this.name = myName;
		this.id = myId;
		this.email = myEmail;
	}

	getName() {
		return this.name;
	}

	getId() {
		return this.id;
	}

	getEmail() {
		return this.email;
	}

	getRole() {
		return "Employee";
	}

	getCardInfo() {
		return "";
	}

	printCard() {
		return `<div>
	<div>
		<p>${this.getName()}</p>
		<p>${this.getRole()}</p>
	</div>
	<ul>
		<li>ID: ${this.getId()}</li>
		<li>Email: <a href="mailto:${this.getEmail()} target="_blank">${this.getEmail()}</a></li>
		<li>${this.getCardInfo()}</li>
	</ul>
</div>`;
	}
}

module.exports = Employee;