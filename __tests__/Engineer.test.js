const Engineer = require("../lib/Engineer");

test("tests Engineer constructor and getters", () => {
	const testName = "Todd";
	const testId = "4321";
	const testEmail = "todd@mail.server";
	const testGithub = "TestHub"
	const engineer = new Engineer(testName, testId, testEmail, testGithub);
  
	expect(engineer.getName()).toBe(testName);
	expect(engineer.getId()).toBe(testId);
	expect(engineer.getEmail()).toBe(testEmail);
	expect(engineer.getGithub()).toBe(testGithub);
	expect(engineer.getRole()).toBe("Engineer");
	expect(engineer.getCardInfo()).toEqual(expect.any(String));
});
