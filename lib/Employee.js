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

	printCard() {
		return
`<div>
	<div>
		<p>${getName}</p>
		<p>${getRole()}</p>
	</div>
	<ul>
		<li>ID: ${getId()}</li>
		<li>Email: <a href="mailto:${getEmail()} target="_blank">${getEmail}</a></li>
		<li>${getCardInfo()}</li>
	</ul>
</div>`;
	}
}

module.exports = Employee;