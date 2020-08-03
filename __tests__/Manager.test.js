const Manager = require("../lib/Manager");

test("tests Manager constructor and getters", () => {
	const testName = "Jack";
	const testId = "111";
	const testEmail = "bossman@mail.server";
	const testOffice = "23"
	const manager = new Manager(testName, testId, testEmail, testOffice);
  
	expect(manager.getName()).toBe(testName);
	expect(manager.getId()).toBe(testId);
	expect(manager.getEmail()).toBe(testEmail);
	expect(manager.getOfficeNumber()).toBe(testOffice);
	expect(manager.getRole()).toBe("Manager");
	expect(manager.getCardInfo()).toEqual(expect.any(String));
});