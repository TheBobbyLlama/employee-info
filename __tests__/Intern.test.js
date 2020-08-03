const Intern = require("../lib/Intern");

test("tests Intern constructor and getters", () => {
	const testName = "Timmy";
	const testId = "789";
	const testEmail = "newguy@mail.server";
	const testSchool = "Hard Knocks"
	const intern = new Intern(testName, testId, testEmail, testSchool);
  
	expect(intern.getName()).toBe(testName);
	expect(intern.getId()).toBe(testId);
	expect(intern.getEmail()).toBe(testEmail);
	expect(intern.getSchool()).toBe(testSchool);
	expect(intern.getRole()).toBe("Intern");
	expect(intern.getCardInfo()).toEqual(expect.any(String));
});