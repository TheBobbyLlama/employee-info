const Employee = require("../lib/Employee");

test("tests Employee constructor", () => {
	const employee = new Employee("Steve", "123", "me@mail.server");
  
	expect(employee.name).toBe("Steve");
	expect(employee.id).toBe("123");
	expect(employee.email).toBe("me@mail.server");
});

test("tests Employee getters", () => {
	const testName = "Steve";
	const testId = "1234";
	const testEmail = "inbox@mail.server";
	const employee = new Employee(testName, testId, testEmail);
  
	expect(employee.getName()).toBe(testName);
	expect(employee.getId()).toBe(testId);
	expect(employee.getEmail()).toBe(testEmail);
	expect(employee.getRole()).toBe("Employee");
});

test("tests Employee printout", () => {
	const employee = new Employee("Steve", "123", "me@email.server");

	expect(employee.printCard()).toBeNull();
});